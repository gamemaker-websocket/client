draw_set_color($222222);
draw_rectangle(__view_get( e__VW.XView, 0 ), __view_get( e__VW.YView, 0 ), __view_get( e__VW.XView, 0 ) + __view_get( e__VW.WView, 0 ), __view_get( e__VW.YView, 0 ) + __view_get( e__VW.HView, 0 ), false);
draw_set_color($eeeeee);
draw_set_halign(fa_center);
var cx = __view_get( e__VW.XView, 0 ) + __view_get( e__VW.WView, 0 )/2;
var cy = __view_get( e__VW.YView, 0 ) + __view_get( e__VW.HView, 0 )/2;
draw_text(cx, cy, string_hash_to_newline(status));
draw_set_halign(fa_left);

//color
draw_set_halign(fa_center);
draw_text(cx, cy - 30, string_hash_to_newline("<- Change Color ->"));
draw_set_halign(fa_left);
draw_set_color(global.car_colors[global.car_color]);
draw_circle(cx, cy - 50, 10, 0);
draw_set_color($eeeeee);

if(keyboard_check_pressed(vk_right))
    global.car_color = min(array_length_1d(global.car_colors) -1, global.car_color + 1);
else if(keyboard_check_pressed(vk_left))
    global.car_color = max(0, global.car_color - 1);


if(username == "")
{
    keyboard_string = string_lettersdigits(keyboard_string);
    draw_set_halign(fa_center);
    draw_text(cx, cy + 20, string_hash_to_newline(keyboard_string));
    draw_set_halign(fa_left);
    
    var len = string_length(keyboard_string);
    if(len >= 3)
    {
        if(len > 10)
            keyboard_string = string_copy(keyboard_string, 1, 10);
        if(keyboard_check_pressed(vk_enter))
        {
            
            username = keyboard_string;
            status = "Searching for a game";
            net_lobby_join_auto(username, wsnet_sort.ascending, wsnet_sort.ascending);
            keyboard_string = "";
        }
    }
    
}

