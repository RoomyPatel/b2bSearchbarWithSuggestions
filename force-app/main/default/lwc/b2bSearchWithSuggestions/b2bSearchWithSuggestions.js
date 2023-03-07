import { LightningElement } from 'lwc';
import SEARCH_SUGGESTIONS from '@salesforce/resourceUrl/b2bSearchbarWithSuggestions';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class B2bSearchWithSuggestions extends LightningElement {

    renderedCallback() {
        // Static Resource 
        Promise.all([loadStyle(this, SEARCH_SUGGESTIONS + '/b2bSearchbarWithSuggestions/css/b2bSearchbarWithSuggestions.css')]);
    }
}