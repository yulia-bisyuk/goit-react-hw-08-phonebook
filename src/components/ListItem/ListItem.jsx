import { useState } from 'react';
import PropTypes from 'prop-types';
import EditContactForm from 'components/EditContactForm';
import { ImCancelCircle } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';
import { IconContext } from "react-icons";
import { ActionButton, LiItem, ButtonsWrapper } from './ListItem.styled';
import { useDeleteContactMutation } from '../../redux/ContactsSlice/ContactsSlice';


const ListItem = ({ id, name, phone }) => {
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [deleteContact] = useDeleteContactMutation();
   
    const handleClose = () => {
        setEditFormIsOpen(false);
    }

    return (
        <>
        <LiItem
            id={id}
            key={id}>
            {name}: {phone}
            <ButtonsWrapper>
            <IconContext.Provider value={{ color: "#00420b", size: "18px" }}>
             <ActionButton 
             type='button'
             onClick={() => setEditFormIsOpen(true)} >
                    <FiEdit />
                        </ActionButton>
                        
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#bc2525", size: "18px" }}>
                <ActionButton type='button'
                    onClick={()=> deleteContact(id)}>
                    <ImCancelCircle />
                </ActionButton>
                </IconContext.Provider>
                </ButtonsWrapper>
            </LiItem>
            
            {editFormIsOpen &&
              <div>
                    <EditContactForm
                        onClose={handleClose}
                        id={id}
                    />
                   </div>
               }
            </>
    )
};

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default ListItem;