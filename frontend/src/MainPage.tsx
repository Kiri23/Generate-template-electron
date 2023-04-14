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
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import "./MainPage.css";

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

  const bgGradient = useColorModeValue(
    'linear(to-br, teal.400, blue.500)',
    'linear(to-br, teal.700, blue.800)'
  );

  return (
    <Box>
      <Center h="100%">
        <VStack spacing={8} p={4} bgColor="white" borderRadius="lg" boxShadow="lg">
          <Text fontSize="2xl" fontWeight="bold">
            Select the template you want to duplicate
          </Text>
          <Box w="100%">
            <UnorderedList spacing={3} listStyleType="none">
              {templates.map((template) => (
                <ListItem
                  key={template}
                  onClick={() => handleTemplateSelect(template)}
                  cursor="pointer"
                  bg="gray.100"
                  borderRadius="md"
                  py={2}
                  px={4}
                  display="flex"
                  alignItems="center"
                  _hover={{ bg: 'gray.200' }}
                >
                  {selectedTemplate === template && (
                    <CheckIcon color="green.500" mr={2} />
                  )}
                  {template}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Input
            type="file"
            onChange={handleDestinationSelect}
            boxShadow="inner"
            p={1}
            borderRadius="md"
          />
          <Button onClick={handleDuplicate} colorScheme="blue" size="lg">
            Duplicate
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default MainPage;