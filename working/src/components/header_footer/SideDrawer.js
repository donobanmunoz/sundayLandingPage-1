import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('featured')}>
                    Felipe Leon 
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Rosario Tejeda
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('venuenfo')}>
                    Zulma Muñoz
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Felipe Omar Leon 
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                   Andrea Calixto
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('pricing')}>
                    Sury Muñoz
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Abril Muñoz
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Ramon Muñoz
                </ListItem>


            </List> 
        </Drawer>
    );
};

export default SideDrawer;