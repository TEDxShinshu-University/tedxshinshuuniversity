$(document).ready(function() {

    $('#header').backstretch("img/fire.jpg");

    function changeBackground() {
                $('#header').backstretch(
                    ["img/fire.jpg",
                     "img/blossom.jpg",
                     "img/stellarsky.jpg",
                     "img/bridge.jpg",
                     "img/mountain.jpg"],
                     {duration: 2000, fade: 4000}
                );
            }

        var options =  {
            size: "large",
            onText: 'ENG',
            offText: 'JPN',
            onColor: 'info',
            offColor: 'primary'
        };

        $("#lg-toggle").bootstrapSwitch(options);

        $('#lg-toggle').on('switchChange.bootstrapSwitch', function(event, state){
                if(state == true){
                    $('.jp').show();
                    $('.eng').hide();
                }else {
                    $('.eng').show();
                    $('.jp').hide();
                }
        });

});
