import Message from './11-ModuleImportExportLibrary.js';

export default class MessageSub {
    constructor(){
        this.message = new Message();
    }
}

window.MessageSub = MessageSub;