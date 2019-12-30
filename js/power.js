$(document).ready(() => {
    $('#appliance_id').change(() => {
        var subapp = $(appliance_id).val();
        $.ajax({
            url: "process/power.php",
            type: "POST",
            data: {
                app: subapp
            },
            dataType: "text",
            success: function(data) {
                $('#load_below_me').after(data)
            }
        })
    });
    $('#appliance_id').change(() => {
        $('.delete').remove()
    });
    $('#subapp').change(() => {
        var power = $(subapp).val();
        $.ajax({
            url: "process/subapp.php",
            type: "POST",
            data: {
                power: power
            },
            dataType: "text",
            success: function(data) {
                $('#power').val(data)
            }
        })
    });
    $('#subapp').change(() => {
        $('.remove').remove();
        $('#tbNumber').delete()
    });
    $('#button').click(() => {
        mainApp = $('#mainapp').val();
        subApp = $('.subapp').val();
        power = $('#power').val();
        pf = 0.8;
        tbNumber = $('#tbNumber').val();
        powerRating = power / 0.57142857142;
        totalPower = tbNumber * powerRating;
        final = Math.floor(totalPower);
        if ((mainApp == "") || (subApp == "") || (tbNumber == "")) {
            alert("Please select Appliance, Power, and enter no of equipment")
        } else {
            $("#ResultText").text(final + "" + " VA").fadeIn(500);
            
        }
    })
})