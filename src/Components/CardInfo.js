import React from 'react';
import Modal from './Modal';
import Labels from './Labels';
import AddCard from './AddCard';
import { useState, useEffect } from 'react';
import '../CSSFiles/CardInfo.css';
import {
   Calendar,
   CheckSquare,
   Image,
   List,
   Tag,
   Trash,
   Type,
} from 'react-feather';

/* An array of label colors to show in the infobox*/
export default function CardInfo(props) {
   const colors = [
      '#a8193d',
      '#4fcc25',
      '#1ebffa',
      '#8da377',
      '#9975bd',
      '#cf61a1',
      '#240959',
   ];

   // Make a state to store choosen color in the labels:
   const [activeColor, setActiveColor] = useState('');
   const [values, setValues] = useState({ ...props.card });

   // Function to calculate Percent for the Task-Progress in CardInfo
   const calPercent = () => {
      if (!values.tasks?.length) return 0;
      const completed = values.tasks?.filter((item) => item.completed)?.length;
      return (completed / values.tasks?.length) * 100;
   };

   // Funtion to updateDate in the value state;
   const updateDate = (date) => {
      if (!date) return;

      setValues({
         ...values,
         date,
      });
   };

   // to add new label in the label list:
   const addLabel = (val, color) => {
      const index = values.labels?.findIndex((item) => item.text === val);
      if (index > -1) return;
      const label = {
         text: val,
         color,
      };
      setValues({ ...values, labels: [...values.labels, label] });
      setActiveColor('');
   };

   // to remove label from the label list
   const removeLabel = (label) => {
      // filtering out the labels that are not equal to the arg label:
      const temp = values.labels?.filter((item) => item !== label);
      setValues({ ...values, labels: temp });
   };

   // to add new Task to the task list:
   const addTask = (value) => {
      const task = {
         id: Date.now() + Math.random() * 2,
         completed: false,
         text: value,
      };
      setValues({
         ...values,
         tasks: [...values.tasks, task],
      });
   };

   // To remove task from the tasklist:
   const removeTask = (id) => {
      const tasks = [...values.tasks];

      // filtering out the tasks to avoid the task with id:
      const tempTasks = tasks.filter((item) => item.id !== id);
      setValues({
         ...values,
         tasks: tempTasks,
      });
   };

   const updateTask = (id, value) => {
      const tasks = [...values.tasks];

      const index = tasks.findIndex((item) => item.id === id);
      if (index < 0) return;

      tasks[index].completed = value;

      setValues({
         ...values,
         tasks,
      });
   };
   useEffect(() => {
      props.updateCard(props.card.id, props.boardId, values);
   }, [values]);

   return (
      <Modal onClose={() => props.onClose()}>
         {/* Title Part of InfoBox*/}
         <div className="cardInfo">
            <div className="cardInfo_box">
               <div className="cardInfo_box_title">
                  <Image />
                  Image Link
               </div>
               <div className="cardInfo_box_Body">
                  <AddCard
                     text={values.image}
                     default={values.image}
                     placeholder="Enter image Link"
                     buttonText="Set Link"
                     onSubmit={(value) =>
                        setValues({ ...values, image: value })
                     }
                  />
               </div>
            </div>
            <div className="cardInfo_box">
               <div className="cardInfo_box_title">
                  <Type />
                  {values.title}
               </div>
               <div className="cardInfo_box_Body">
                  <AddCard
                     text={values.title}
                     default={values.title}
                     placeholder="Enter Title"
                     buttonText="Set Title"
                     onSubmit={(value) =>
                        setValues({ ...values, title: value })
                     }
                  />
               </div>
            </div>

            {/*Description Part of the InfoBox*/}
            <div className="cardInfo_box">
               <div className="cardInfo_box_title">
                  <List />
                  Description
               </div>
               <div className="cardInfo_box_Body">
                  <AddCard
                     text={values.desc}
                     default={values.desc}
                     placeholder="Enter Desc"
                     buttonText="Add Desc"
                     onSubmit={(value) => setValues({ ...values, desc: value })}
                  />
               </div>
            </div>

            {/* Date Part*/}
            <div className="cardInfo_box">
               <div className="cardInfo_box_title">
                  <Calendar />
                  Date
               </div>
               <div className="cardInfo_box_Body">
                  <input
                     type="date"
                     defaultValue={values.date}
                     min={new Date().toISOString().substr(0, 10)}
                     onChange={(event) => updateDate(event.target.value)}
                  />
               </div>
            </div>

            {/* Labels Part*/}
            <div className="cardInfo_box">
               <div className="cardInfo_box_title">
                  <Tag />
                  Labels
               </div>
               <div className="cardInfo_box_labels">
                  {values.labels?.map((item, index) => (
                     <Labels
                        close
                        onClose={() => removeLabel(item)}
                        key={item.text + index}
                        color={item.color}
                        text={item.text}
                     />
                  ))}
               </div>
               <div className="cardInfo_box_colors">
                  {colors.map((item, index) => (
                     <li
                        key={index}
                        style={{ backgroundColor: item }}
                        className={item === activeColor ? 'active' : ''}
                        onClick={() => setActiveColor(item)}
                     />
                  ))}
               </div>
               <div className="cardInfo_box_Body">
                  <AddCard
                     text="Add Label"
                     placeholder="Enter Label"
                     buttonText="Add"
                     onSubmit={(value) => addLabel(value, activeColor)}
                  />
               </div>
            </div>

            {/*Task-Progress Part*/}
            <div className="cardInfo_box">
               <div className="cardInfo_box_title">
                  <CheckSquare />
                  Tasks
               </div>
               <div className="cardInfo_box_progress-bar">
                  <div
                     className="cardInfo_box_progress"
                     style={{
                        width: calPercent() + '%',
                        backgroundColor:
                           calPercent() === 100 ? 'limegreen' : '',
                     }}
                  />
               </div>
               <div className="cardInfo_box_list">
                  {values.tasks?.map((item) => (
                     <div key={item.id} className="cardInfo_task">
                        <input
                           type="checkbox"
                           defaultChecked={item.completed}
                           onChange={(event) =>
                              updateTask(item.id, event.target.checked)
                           }
                        />
                        <p>{item.text} </p>
                        <Trash
                           onClick={() => {
                              removeTask(item.id);
                           }}
                        />
                     </div>
                  ))}
               </div>
               <div className="cardInfo_box_Body">
                  <AddCard
                     text="Add new Task"
                     placeholder="Enter Task"
                     buttonText="Add Task"
                     onSubmit={(value) => {
                        console.log(values);
                        addTask(value);
                     }}
                  />
               </div>
            </div>
         </div>
      </Modal>
   );
}
