let CommentDiv = $('.comments');



$('#submit').on('click',function(){

let displayName = $('#displayName').val();
let words = $('#commentLine').val();


if(displayName !== '' && words !== ''){

    let displayNameSpan = $('<div></div>').addClass('display-name').text(displayName);
    let wordsSpan = $('<div></div>').addClass('comment-words').text(words);

    let userDiv = $('<div></div>').addClass('user-comment')
    let editButton = $('<div></div>').addClass('editButton').text('Edit');
    let deleteButton = $('<div></div>').addClass('deleteButton').text('Delete');

        userDiv.prepend(editButton);
        userDiv.prepend(deleteButton);
        userDiv.prepend(displayNameSpan);
        userDiv.prepend(wordsSpan);
       


        deleteButton.on('click', function() {
            $(this).parent().remove();
          });

          editButton.on('click', function() {
            let editInput = $('<label for="edit"><input id="edit"><div class="editSave">Save</div></label>')
            userDiv.append(editInput);
            
            $(CommentDiv).on('click', '.editSave', function() {
                let finalEdit = $(this).siblings('input').val();
                $(this).parent().siblings('.comment-words').text(finalEdit);
                $(this).parent().remove(); 

            })
          });
          
         
          
            
     

         CommentDiv.prepend(userDiv);

    }

})



