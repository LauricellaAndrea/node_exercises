import { writeFile } from 'node:fs';


writeFile('message-txt', "Metodo writeFile",  (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});