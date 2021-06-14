
const list=document.querySelector('#list ul');
const body=document.querySelector('body');
// storing text of new item

const addform=document.forms['add-item'];
addform.addEventListener('submit',function(e){
	e.preventDefault();
	const value1=addform.querySelector('.input-get').value;
    
//creating element

const li=document.createElement('li');
const name=document.createElement('span');

const deletebtn=document.createElement('button');

//add content

name.textContent=value1;
deletebtn.textContent='Delete';

//add classes to there contents
name.classList.add('name');
deletebtn.classList.add('delete');

//append to document
li.appendChild(name);
li.appendChild(deletebtn);
list.appendChild(li);

});

// deleting an item
list.addEventListener('click',function(e){
	if(e.target.className=='delete')
	{
		const li=e.target.parentElement;
		list.removeChild(li);
	}
	})
body.addEventListener('click',function(e){
	if(e.target.className=='remove-list')
	{
		const l=document.querySelectorAll('#list ul li');
		l.forEach(function(i){
			list.removeChild(i);
		})
	}
})