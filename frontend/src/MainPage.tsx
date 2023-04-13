import React, { useState } from 'react';
import {
  Box,
  Center,
  UnorderedList,
  ListItem,
  VStack,
  Input,
  Button,
  Icon,
  Text,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const MainPage: React.FC = () => {
  const [templates, setTemplates] = useState<string[]>([
    'SlackBot',
    'FastAPI',
    'CLI tool',
  ]);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
  };

  const handleDestinationSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };

  const handleDuplicate = () => {
    // Implement the logic to duplicate the selected template
  };

  return (
    <Center>
      <VStack spacing={6}>
        <Text fontSize="2xl">Select the template you want to duplicate</Text>
        <UnorderedList spacing={3}>
          {templates.map((template) => (
            <ListItem
              key={template}
              onClick={() => handleTemplateSelect(template)}
              cursor="pointer"
            >
              {selectedTemplate === template && <CheckIcon />}
              {template}
            </ListItem>
          ))}
        </UnorderedList>
        <Input
          type="file"
          onChange={handleDestinationSelect}
        />
        <Button onClick={handleDuplicate} colorScheme="blue">
          Duplicate
        </Button>
      </VStack>
    </Center>
  );
};

export default MainPage;