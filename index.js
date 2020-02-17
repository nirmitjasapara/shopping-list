function handleButtons() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this.closest('li')).children('.shopping-item').toggleClass('shopping-item__checked');
    });
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        this.closest('li').remove();
    });
  }
  function handleForm() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const addElement = $(event.currentTarget)
            .find('#shopping-list-entry').val();
        $('.shopping-list').append(
            `<li>
            <span class='shopping-item'>
            ${addElement}</span>
            <div class='shopping-item-controls'>
              <button class='shopping-item-toggle'>
                <span class='button-label'>check</span>
              </button>
              <button class='shopping-item-delete'>
                <span class='button-label'>delete</span>
              </button>
            </div>
          </li>`
          );
      });
  }
  $(handleButtons);
  $(handleForm);