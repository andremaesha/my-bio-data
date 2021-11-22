import $ from "jquery";
import moment from "moment";

const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("HH:mm:ss"));
    $(".date").text(moment().format("dddd, Do MMMM yyyy"));
};
 
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};
 
export default updateTime;