const Column = {
	IdCounter: 4,
	dragged: null,

	process (columnElement){
		const spanAction_addNote = columnElement.querySelector('[data-action-addNote]');

		spanAction_addNote.addEventListener('click', function(event){
			const noteElement = Note.create();
			columnElement.querySelector('[data-notes]').append(noteElement);
			noteElement.setAttribute('contenteditable', 'true');
			noteElement.focus();
		});

		const headerElement = columnElement.querySelector('.column-header');

		headerElement.addEventListener('dblclick', function (event){
			headerElement.setAttribute('contenteditable', true);
			headerElement.focus();
		})

		headerElement.addEventListener('blur', function (event){
			headerElement.removeAttribute('contenteditable', true);
		})

		columnElement.addEventListener('dragstart', Column.dragstart);
		columnElement.addEventListener('dragend', Column.dragend);

		columnElement.addEventListener('dragenter', Column.dragenter);
		columnElement.addEventListener('dragover', Column.dragover);
		columnElement.addEventListener('dragleave', Column.dragleave);

		columnElement.addEventListener('dragover', Column.dragover);
		columnElement.addEventListener('drop', Column.drop);
	},	

	dragstart (event){
		Column.dragged = this;
		Column.dragged.classList.add('dragged');

	},
	dragend (event){
		Column.dragged.classList.remove('dragged');
		Column.dragged = null;
	},

	dragenter (event){
		if (Column.dragged === this){
			return;
		}
	},
	dragover (event){
		event.preventDefault();
		if (Column.dragged === this){
			return;
		}
	},
	dragleave (event){
		if (Column.dragged === this){
			return;
		}
	},
	drop () {
		if (Note.dragged){
			return columnElement.querySelector('[data-notes]').append(Note.dragged);
		}
	},
}