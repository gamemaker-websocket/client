/// @description net_send_array(msg_id, to, array)
/// @param msg_id
/// @param  to
/// @param  array
function net_send_array(argument0, argument1, argument2) {

	with(obj_wsnet)
	{
	    if(argument1 < 0)
	        argument1 = 255;
    
	    buffer_seek(buffer, buffer_seek_start, 0);
    
	    buffer_write(buffer, buffer_u8, wsnet_cmd.game_message);
	    buffer_write(buffer, buffer_u8, argument1); //dest
	    buffer_write(buffer, buffer_u16, argument0); //msg id
    
	    buffer_write(buffer, buffer_u8, wsnet_type.array);
    
	    var len = array_length_1d(argument2);
	    buffer_write(buffer, buffer_u16, len);
	    for(var i = 0; i < len; i++)
	    {
	        var val = argument2[i];
        
	        if(is_real(val))
	        {
	            buffer_write(buffer, buffer_u8, wsnet_type.number);
	            buffer_write(buffer, buffer_f64, val);
	        }
	        else if(is_string(val))
	        {
	            buffer_write(buffer, buffer_u8, wsnet_type.text); 
	            buffer_write(buffer, buffer_string, val);        
	        }
	        else if(is_bool(val))
	        {
	            buffer_write(buffer, buffer_u8, wsnet_type.byte);
	            buffer_write(buffer, buffer_u8, val);
	        }
	        else if(is_int64(val))
	        {
	            buffer_write(buffer, buffer_u8, wsnet_type.integer64);
	            buffer_write(buffer, buffer_u64, val);
	        }
	    }
    
	    gws_send_buffer(ws, buffer, buffer_tell(buffer));
	}




}
