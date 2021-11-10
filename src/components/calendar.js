import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, {Children} from 'react';

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const gameDays = [
  {name: "7pm vs Six Nations", time: new Date(2021, 9, 1, 19, 0)}, // 7pm
  {name: "7pm vs Oakville", time: new Date(2021, 9, 5, 19, 0)}, // 7pm
  {name: "7pm vs Brooklin", time: new Date(2021, 9, 10, 19, 0)}, // 7pm
  {name: "7pm vs Cobourg", time: new Date(2021, 9, 17, 19, 0)}, // 7pm
  {name: "7pm vs Six Nations", time: new Date(2021, 9, 20, 19, 0)}, // 7pm
  {name: "7pm vs Brooklin", time: new Date(2021, 9, 29, 19, 0)}, // 7pm
  {name: "7pm vs Cobourg", time: new Date(2021, 10, 3, 19, 0)}, // 7pm
  {name: "7pm vs Oakville", time: new Date(2021, 10, 7, 19, 0)}, // 7pm
  {name: "7pm vs Oakville", time: new Date(2021, 10, 11, 19, 0)}, // 7pm
  {name: "7pm vs Six Nations", time: new Date(2021, 10, 15, 19, 0)}, // 7pm
  {name: "7pm vs Brooklin", time: new Date(2021, 10, 19, 19, 0)}, // 7pm
  {name: "7pm vs Cobourg", time: new Date(2021, 10, 23, 19, 0)}, // 7pm

]

const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();


const isGameDay = (date) => {
  for (let game of gameDays){
    if (datesAreOnSameDay(game.time, date)){
      return true;
    }
  }
  return false;
}

const ColoredDateCellWrapper = ({children, value}) =>
	React.cloneElement(Children.only(children), {
		style: {
			...children.style,
			backgroundColor: isGameDay(value) ? 'lightgreen' : 'rgba(0,0,0,0)',
		},
	}
    );

const eventStyleGetter = (event, start, end, isSelected) => {
      console.log(event);
      var backgroundColor = '#' + event.hexColor;
      var style = {
          backgroundColor: backgroundColor,
          borderRadius: '0px',
          color: 'black',
          border: '0px',
          display: 'block',
          backgroundColor: 'rgba(0,0,0,0)',
          fontSize: 15,
      };
      return {
          style: style
      };
  }

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={gameDays.map((game) => 
        { 
          return {
          'title': game.name,
          'allDay': true,
          'start': game.time,
          'end': game.time,
        }
      })  
      }
      eventPropGetter={(eventStyleGetter)}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      views={{month: true}}
      components={{
        dateCellWrapper: ColoredDateCellWrapper,
        }}
    />
  </div>
)

export default MyCalendar;