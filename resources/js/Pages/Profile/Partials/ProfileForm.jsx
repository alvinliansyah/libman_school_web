// import React, {useState} from 'react';
// import Modal from 'react-modal';
// import Avatar from "react-avatar-edit";
// import profile from '../../../../../public/Assets/Images/defaultPicture.jpg'
// import TextField from '../../../Components/TextField';

// const ProfileForm = () => {
//     const [im, setim] = useState(null);
//     const [pim, setpim] = useState(null);
//     const customStyles = {
//         content: {
//           top: '50%',
//           left: '60%',
//           right: 'auto',
//           bottom: 'auto',
//           marginRight: '-50%',
//           transform: 'translate(-50%, -50%)',
//           border:"0",
//         },
//       };

//     const [modalIsOpen, setIsOpen] = React.useState(false);

//     function openModal() {
//       setIsOpen(true);
//     }
  
//     function closeModal() {
//       setIsOpen(false);
//     }

//     const onCrop = (i) =>{
//         setim(i);
//         setpim(i);
//     }

//     const onClose = () =>{
//         closeModal();
//         setpim(null);
//     }

//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//     return (
//         <div>
//         <div
//         style={{
//             display: "flex",
//             width: "100%",
//             height: "50vh",
//             justifyContent: "center",
//             alignItems: "center",
//         }}>
//         <div 
//         style={{
//             cursor: "pointer",
//             height: "300px",
//             width: "300px",
//             display: "flex",
//         }}
//         onClick={openModal}>
//         <img 
//         style={{
//             width: "100%",
//             borderRadius: "50%",
//         }}
//         src={im ? im : profile} />
//         </div>
//           <Modal
//             isOpen={modalIsOpen}
//             onRequestClose={closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//           >
//             <Avatar
//                 width={390}
//                 height={295}
//                 onCrop={onCrop}
//                 onClose={onClose}
//             />
//           </Modal>
//         </div>
//         <div
//         style={{
//             position: "absolute",
//             right: "20%",
//             top: "20%",
//             zIndex: "99",
//         }}>
//         {pim && <img src={pim} />}
//         </div>

//         <form className="flex flex-col items-center">
//         <TextField
//         id="example-input"
//         placeholder="Enter text here"
//         value={inputValue}
//         onChange={handleInputChange}
//         disabled
//         className="bg-gray-200"
//       />
//       <br/>
//       <TextField
//         id="example-input"
//         placeholder="Enter text here"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <br/>
//       <TextField
//         id="example-input"
//         placeholder="Enter text here"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//         </form>
                
//     </div>
//   )
// }

// export default ProfileForm
