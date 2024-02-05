import React, { useState } from 'react';
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { Button, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const ContextButton = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleContextMenu = (event) => {
    // Calculate mouse coordinates relative to the window
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Set the menu position
    setPosition({ left: mouseX, top: mouseY });

    // Open the menu
    setMenuOpen(true);

    // Prevent the default context menu
    event.preventDefault();
  };

  const handleCloseMenu = () => {
    // Close the menu
    setMenuOpen(false);
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ position: 'relative' }}>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} style={{ position: 'fixed', left: position.left, top: position.top }}>
        <Link aria-label='Options' icon={<HamburgerIcon />} variant='outline'>
          {props.children.fileName}
        </Link>
        <MenuList zIndex={100}>
          <MenuItem icon={<AddIcon />} command='⌘T'>
            New Tab
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command='⌘O'>
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ContextButton;
