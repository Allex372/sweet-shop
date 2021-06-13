import {Component, OnInit} from '@angular/core';
import * as uuid from 'uuid';

// @ts-ignore
import Info from '../../../../assets/img/import/Info.svg';
// @ts-ignore
import Down from '../../../../assets/img/import/Down.svg';
// @ts-ignore
import Up from '../../../../assets/img/import/Up.svg';
// @ts-ignore
import Delete from '../../../../assets/img/import/Delet.svg';
// @ts-ignore
import Close from '../../../../assets/img/import/Close.svg';
// @ts-ignore
import Info_black from '../../../../assets/img/import/Info-black.svg';


@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.scss']
})
export class ImportPageComponent implements OnInit {

  constructor() {
  }

  Delete = Delete;
  Info = Info;
  Down = Down;
  Up = Up;
  Info_black = Info_black;
  settingItemStatusTop = false;
  settingItemStatusBottom = false;
  countImport = [uuid.v4()];
  downloadVariantStatus = false;
  inputValue = {};
  inputFile = {};
  inputLink = {};
  Close = Close;
  UploadFileName = null;
  onclick;

  ngOnInit(): void {
    this.countImport = JSON.parse(localStorage.getItem('import_count')) ?
      JSON.parse(localStorage.getItem('import_count')) :
      this.countImport;
    this.updateInfo();
    localStorage.setItem('input_value', JSON.stringify(this.inputValue));
    this.inputValue = localStorage.getItem('input_value') ? JSON.parse(localStorage.getItem('input_value')) : this.inputValue;
    // this.inputFile = JSON.parse(localStorage.getItem('input-file'));
  }

  setInputOnLocal(id: any): void {
    this.inputValue = {...this.inputValue, [id]: this.inputValue[id]};
    localStorage.setItem('input_value', JSON.stringify(this.inputValue));
  }

  updateInfo(): void {
    for (const argument of this.countImport) {
      this.inputValue[argument] = {newLinks: [uuid.v4()], newFile: [uuid.v4()]};
      // this.inputValue[argument] = {newLinks: [{[uuid.v4()]: {inputValue: ''}}], newFile: [{[uuid.v4()]: {inputFile: ''}}]};

    }
    const value = JSON.parse(localStorage.getItem('input_value'));
    this.inputValue = {...this.inputValue, ...value};
  }

  changeErrowDirection(): void {
    this.settingItemStatusTop = !this.settingItemStatusTop;
  }

  addSettingDropdown(e: Event, id: any): void {
    console.log(e);
    console.log(id);
    const status = this.inputValue ?
      this.inputValue[id] ?
        this.inputValue[id].settingStatus ?
          this.inputValue[id].settingStatus : false : false : false;
    this.inputValue[id] = {...this.inputValue[id], settingStatus: !status};
    localStorage.setItem('input_value', JSON.stringify(this.inputValue));
  }


  isChangedCheck(e: Event, id: any): void {
    // @ts-ignore
    const value = Boolean(e.target.value);
    // @ts-ignore
    const name = e.target.name.split(',').pop();
    // @ts-ignore
    this.inputValue[id] = {...this.inputValue[id], [name]: value};
    localStorage.setItem('input_value', JSON.stringify(this.inputValue));
  }

  addImport(): void {
    const myId = uuid.v4();

    this.countImport.push(myId);
    this.updateInfo();
    localStorage.setItem('import_count', JSON.stringify(this.countImport));
  }

  downloadVariant(e): void {
    console.log(e.target.value);
  }

  import(e: Event, id: any): void {
    e.preventDefault();
    let data;
    const value = {...this.inputValue[id]};
    if (!value['download-radio-button']) {
      const links = [];
      const linksData = this.inputValue[id].newLinks;
      for (const link of linksData) {
        if (this.inputLink[link] !== undefined) {
          links.push(this.inputLink[link]);
        }
      }
      // tslint:disable-next-line:no-unused-expression
      value.newFile && delete value.newFile;
      // tslint:disable-next-line:no-unused-expression
      value.newLinks && delete value.newLinks;
      // tslint:disable-next-line:no-unused-expression
      value.settingStatus && delete value.settingStatus;
      // tslint:disable-next-line:no-unused-expression
      value['download-radio-button'] && delete value['download-radio-button'];
      data = {...value, links};
      console.log(data);
    }
    if (value['download-radio-button']) {
      const files = [];
      const fileData = this.inputValue[id].newFile;
      for (const fileNum of fileData) {
        if (this.inputFile[fileNum] !== undefined) {
          files.push(this.inputFile[fileNum]);
        }
      }
      // tslint:disable-next-line:no-unused-expression
      value.newFile && delete value.newFile;
      // tslint:disable-next-line:no-unused-expression
      value.newLinks && delete value.newLinks;
      // tslint:disable-next-line:no-unused-expression
      value.settingStatus && delete value.settingStatus;
      // tslint:disable-next-line:no-unused-expression
      value['download-radio-button'] && delete value['download-radio-button'];
      data = {...value, files};
      console.log(data);

    }

  }

  removeImport(e: Event, id: any): void {
    e.preventDefault();
    this.countImport = this.countImport.filter((value => value !== id));
    delete this.inputValue[id];
    localStorage.setItem('input_value', JSON.stringify(this.inputValue));
    localStorage.setItem('import_count', JSON.stringify(this.countImport));
  }

  isCheckBoxChecked(id: any, e: Event): void {
    // @ts-ignore
    const value = e.currentTarget.checked;
    // @ts-ignore
    const name = e.target.name.split(',').pop();

    this.inputValue[id] = {...this.inputValue[id], [name]: value};

    // set localStorage automaticli
    // localStorage.setItem('input_value', JSON.stringify(this.inputValue));
  }

  isRadioButtonChecked(id: any, e: Event): void {
    // @ts-ignore
    const value = e.target.value;
    // @ts-ignore
    const name = e.target.name.split(',').pop();
    // @ts-ignore
    this.inputValue[id] = {...this.inputValue[id], [name]: value};
  }

  resetSetting(id: any, e: Event): void {
    this.inputValue[id] = {
      settingStatus: this.inputValue[id].settingStatus, newLinks: this.inputValue[id].newLinks,
      newFile: this.inputValue[id].newFile,
      ['download-radio-button']: this.inputValue[id]['download-radio-button']
    };
    this.setInputOnLocal(id);
  }

  saveSetting(id: any, e: Event): void {
    e.preventDefault();
    this.setInputOnLocal(id);
  }

  addNewLink(id: any, e: Event): void {
    e.preventDefault();
    this.inputValue[id].newLinks.push(uuid.v4());
    this.setInputOnLocal(id);
  }

  addNewFile(id: any, e: Event): void {
    e.preventDefault();
    this.inputValue[id].newFile.push(uuid.v4());
    this.setInputOnLocal(id);
  }

  removeLink(id: any, newLinkID: any, $event: Event): void {
    $event.preventDefault();
    this.inputValue[id].newLinks = this.inputValue[id].newLinks.filter(value => value !== newLinkID);
    this.setInputOnLocal(id);
  }

  removeFile(id: any, newFileID: any, $event: Event): void {
    $event.preventDefault();
    this.inputValue[id].newFile = this.inputValue[id].newFile.filter(value => value !== newFileID);
    this.setInputOnLocal(id);
  }

  removeInputValue(newLink: any, id: any, e: Event): void {

    const inputID = `${newLink},input1`;
    console.log(inputID);
    const input = document.getElementById(inputID);
    input.innerText = '';
    // @ts-ignore
    input.value = '';
  }


  addFile(e: Event, id: any, newFile: any): void {
    // @ts-ignore
    this.inputFile[newFile] = {...this.inputFile[newFile], file: e.target.files[0]};
  }

  setLinkInfo(e: Event, newLink: any): void {
    // @ts-ignore
    const name = e.target.name.split(',').pop();
    // @ts-ignore
    this.inputLink[newLink] = {...this.inputLink[newLink], [name]: e.target.value};
  }


  deleteCurrentFile(e: MouseEvent, newFile: any): void {
    e.preventDefault();
    delete this.inputFile[newFile];
  }

  setInputOnFIle(e: Event, id: any, newFile: any): void {
    // @ts-ignore
    const name = e.target.name.split(',').pop();
    // @ts-ignore
    this.inputFile[newFile] = {...this.inputFile[newFile], [name]: e.target.value};
  }

}
