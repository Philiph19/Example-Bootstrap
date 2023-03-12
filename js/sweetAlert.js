(async() => { 
    
    const {value: hobby} = await Swal.fire({ 
    title: '¡Bienvenid@s!',
    text: 'Selecciona tu hobby favorito por favor...',
    //html: '<b class=""Rojo>Preguntas?</b>',
    icon: 'info',
    //Tipos icon: info, error, question, success.
    confirmButtonText: 'Siguiente',
    footer: '<span class="rojo">¡Información importante!</span>',
    width: '70%',
    padding: '1rem',
    //background: '#000',
    //grow: 'fullscreen'
    backdrop: true,
    timer: 50000,
    timerProgressBar: true,
    //toast: true,
    position: 'top-end',
    //tipos: top-end, bottom-end, top, bottom, center.
    allowOutsideClick: false, //dar click fuera y quita alerta (Solo con toast en false)
    allowEscapeKey: false, //Oprimir tecla Escape y quita alerta (Solo con toast en false)
    allowEnterKey: false, //Oprimir tecla Enter y quita alerta (Solo con toast en false)
    stopKeydownPropagation: false, //Evita que funcionen los eventos externos, si este objeto esta activo (true) 

    input: 'select',
    inputPlaceholder: 'Hobbys',
    inputValue: '',
    inputOptions: {
        Musica: 'Musica',
        Lectura: 'Lectura',
        Anime: 'Anime',
        Deportes: 'Deportes',
        VideoJuegos: 'VideoJuegos'
    },

    showConfirmButton: true,
    confirmButtonColor: '#3E60E9',
    confirmButtonAriaLabel: 'Confirmar',

    showCancelButton: false,
    cancelButtonText: 'Cancelar',
    cancelButtonAriaLabel: 'Cancelar',

    buttonStyling: true,
    showCloseButton: true,
    closeButtonAriaLabel: 'Cerrar Alerta',

    //imageUrl: 'img/',
    //imagewidth: '',
    //imageheight: 
    //imageAlt: '',

    }); 

    if (hobby){
        swal.fire({
            title: `Seleccionaste ${hobby}`
        });
    }

})()
