$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
        //  list: '.jcarousel-list',
         animation: 'slow',
        wrap: 'both',
        center: true,
        // rtl: true,
        // vertical: true,
        //items: '.jcarousel-item'
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel-pagination').jcarouselPagination({
     'carousel': $('.jcarousel')
        // 'item': function(page, carouselItems) {
        //     return '<li><a href="#' + page + '">Cтраница'+ page +'</a></li>';
        // }
    });

    // $('.jcarousel-pagination').jcarouselPagination({

    //         item: function(page) {
    //         return '<a class="active" href="#' + page + '">' + page + '</a>';
            
    //     }
    // });

//     var carousel = $('.jcarousel').jcarousel({
//     // Core configuration goes here
// });

// $('.jcarousel-pagination').jcarouselPagination({
//     'carousel': $('.jcarousel')
// });
});

