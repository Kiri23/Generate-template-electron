import React, { useState } from 'react';
import { Box, Heading, VStack, List, ListItem, Input, Button, Icon, Text } from '@chakra-ui/react';
import { CheckIcon, AttachmentIcon } from '@chakra-ui/icons';
import './mainPage.css';

const MainPage: React.FC = () => {
  const templates = [
    'SlackBot',
    'FastAPI',
    'CLI tool',
  ];
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const handleTemplateClick = (template: string) => {
      setSelectedTemplate((prevSelectedTemplate) =>
        prevSelectedTemplate === template ? "" : template
    );
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedPath(event.target.files[0].path);
    }
  };

  const handleDuplicate = () => {
    // Logic for duplicating the template in the selected destination
  };

  return (
    <Box className="container">
      <Text fontSize="2xl" fontWeight="bold" className="title">
        Select the template you want to duplicate
      </Text>
      <VStack as="ul" className="list" spacing={3}>
      <List className="list" spacing={3}>
  {templates.map((template) => (
            <ListItem
              as="li"
              key={template}
              onClick={() => handleTemplateClick(template)}
              className={`list-item ${selectedTemplate === template ? 'selected' : ''}`}
            >
              {template}
          {selectedTemplate === template && <Icon as={CheckIcon} ml={2} className="checkmark"/>}
            </ListItem>
          ))}
        </List>
      </VStack>
      <Box className="input-wrapper">
        <Input
          type="file"
          id="file"
          className="input"
          onChange={handleFileInput}
        />
        <label htmlFor="file" className="input-label">
          <Icon as={AttachmentIcon} />
          <span className="input-label-text">
            {selectedPath ? 'Path selected' : 'Choose a destination'}
          </span>
        </label>
      </Box>
      <Button onClick={handleDuplicate} className="button">
        Duplicate
      </Button>
    </Box>
  );
};

export default MainPage;
