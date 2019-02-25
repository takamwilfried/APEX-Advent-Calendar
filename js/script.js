function acalInit(path, imgPath, allOpen, setMonth) {

    var files = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var scrolled = false;
    var timeDelay = 200;

    // Only work in December
    if (month === setMonth || allOpen) {
        // Loop through each calendar window
        $(".acal-li").each(function (index) {
            var adventwindow = index + 1;
            var item = $(this);

            // Open past windows
            if (day !== adventwindow && adventwindow < day) {
                window.setTimeout(function () {
                    item.children(".door").addClass("open");
                }, timeDelay);
            }

            // timeout offset for past window opening animation
            timeDelay += 100;

            // Add words so far to message variable
            if (adventwindow <= day || allOpen) {
                $(this).append('<div class="revealed"><a target="_blank" href="' + imgPath + '/full/' + files[index] + '.jpg"><img class="acal-img" src="' + imgPath + '/thumb/' + files[index] + '.jpg"></a></div>');
            }

            // Add jiggle animation to current day window
            if (adventwindow === day) {
                $(this).addClass("current");
                $(this).addClass("jiggle");
            }

            // On clicking a window, toggle it open/closed and
            // handle other things such as removing jiggle and 25th
            $(this).on("click", function () {
                if (adventwindow <= day || allOpen) {
                    $(this).children(".door").toggleClass("open");
                }

                $(this).removeClass("jiggle");
            });

        });
    }
}