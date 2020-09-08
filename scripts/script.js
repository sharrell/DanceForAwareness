
const NativeUI = require('NativeUI');

const picker = NativeUI.picker;

picker.selectedIndex.monitor().subscribe(function(index) { 
   // index.newValue // The new selectedIndex value
});