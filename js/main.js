var $body = $('body');

var loading = [

    { elements: $body, properties: { width: '20%' } },
    { elements: $body, properties: { width: '30%' } },
    { elements: $body, properties: { width: '50%' } },
    { elements: $body, properties: { width: '70%' } },
    { elements: $body, properties: { width: '100%' } },
    { elements: $body, properties: { height: '100%' }, 
        options: { 
            complete: function() {
                $( '.wrapper' ).velocity( 'transition.slideUpIn' );
                $( 'img' ).velocity( 'transition.flipYIn' );
                $( 'html' ).css( { background: 'white' } );

            } 
        }

    }

];

$.Velocity.RunSequence( loading );