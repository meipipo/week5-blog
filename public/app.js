const list = document.querySelector('#blog-list ul');

list.addEventListener('click', (e) => {
    // delete blogs
    if(e.target.className == 'fa fa-trash'){
        const li = e.target.parentElement.parentElement.parentElement;
        li.parentNode.removeChild(li);
    }
    // edit blogs
    if(e.target.className == 'fa fa-pencil'){
        e.target.className = 'fa fa-check';
        const li = e.target.parentElement.parentElement.parentElement;

        const name = li.querySelector('span[class="name"]');
        const editName = document.createElement('input');
        editName.className = 'name';
        editName.value = name.textContent;
        li.replaceChild(editName, name)

        const blogContent = li.querySelector('div[class="blog-content"]');
        const editContent = document.createElement('textarea');
        editContent.value = blogContent.textContent;
        editContent.className = 'blog-content';
        li.replaceChild(editContent, blogContent);            
    } else if (e.target.className == 'fa fa-check'){
            const li = e.target.parentElement.parentElement.parentElement;

            const originalName = document.createElement('span');
            originalName.className = 'name';
            const editedName = li.querySelector('input[class="name"]');
            originalName.textContent = editedName.value;
            li.replaceChild(originalName, editedName);

            const originalContent = document.createElement('div');
            originalContent.className = 'blog-content';
            const editedContent = li.querySelector('textarea[class="blog-content"]');
            originalContent.textContent = editedContent.value;
            li.replaceChild(originalContent, editedContent);

            e.target.className = 'fa fa-pencil';
    }
});

const create = document.querySelector('#create')
create.addEventListener('click', (e) => {
    // add blogs
    if (e.target.className == 'submit-button'){
        e.preventDefault();
        // create elements
        const li = document.createElement('li');

        // name
        const name = e.target.parentNode.parentNode.querySelector('input').value;
        const blogName = document.createElement('span');
        blogName.className = 'name';
        blogName.textContent = name;

        // content
        const content = e.target.parentNode.parentNode.querySelector('textarea').value;
        const blogContent = document.createElement('div');
        blogContent.className = 'blog-content';
        blogContent.textContent = content;

        if (name == '' && content == '') {
            return
        }

        // buttons
        const buttons = document.createElement('div');
        buttons.className = 'btns';

        const button1 = document.createElement('span');
        button1.className = 'fa-icon';
        const editButton = document.createElement('i');
        editButton.className = 'fa fa-pencil';
        button1.appendChild(editButton);

        const button2 = document.createElement('span');
        button2.className = 'fa-icon';
        const deleteButton = document.createElement('i');
        deleteButton.className = 'fa fa-trash';
        button2.appendChild(deleteButton);

        buttons.appendChild(button1);
        buttons.appendChild(button2);

        // append
        li.append(blogName);
        li.append(blogContent);
        li.append(buttons);

        list.appendChild(li);

        // clean
        e.target.parentNode.parentNode.querySelector('input').value = '';
        e.target.parentNode.parentNode.querySelector('textarea').value = '';
    }
})