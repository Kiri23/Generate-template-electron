import {
  Button,
  VStack,
  Box,
  Text,
  Heading,
  Input,
  List,
  ListItem,
  Icon,
  useToast,
  Collapse,
  Tooltip
} from "@chakra-ui/react";
import { CheckIcon, AttachmentIcon, WarningIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { sendMessageToMain, subscribeToMessageFromMain } from "./service/electron";

const templates = ["SlackBot", "FastAPI", "CLI tool"];

const MainPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);
  const toast = useToast();

  const handleTemplateClick = (template: string) => {
    setSelectedTemplate((prevSelectedTemplate) =>
      prevSelectedTemplate === template ? null : template
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDestination(e.target.files[0].path);
    }
  };

  const handleChooseDestinationClick = () => {
    document.getElementById("destination-input")?.click();
  };

  const handleDuplicateClick = async () => {
    console.log(destination)
    console.log(selectedTemplate)
    sendMessageToMain("duplicate-template", { selectedTemplate, destination });
    // await template.duplicateTemplate(selectedTemplate, destination)
    toast({
      title: "Template duplicated",
      description: `Template ${selectedTemplate} has been duplicated to ${destination}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      spacing={10}
      minHeight="100vh"
      className="main-page"
    >
      <VStack alignItems="center" spacing={4}>
        <Heading as="h1" size="2xl">
          Template Duplicator
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Select a project template and choose a destination to create a duplicate. Get started with a pre-configured template for SlackBot, FastAPI, CLI tool, and more.
        </Text>
      </VStack>
      <Box>
        <Text fontSize="xl" mb={4}>
          Select the template you want to duplicate
        </Text>
        <List spacing={4}>
          {templates.map((template) => (
            <ListItem
              key={template}
              p={4}
              borderWidth={1}
              borderRadius="lg"
              borderColor="gray.300"
              _hover={{ bg: "gray.100" }}
              cursor="pointer"
              className={`list-item ${selectedTemplate === template ? "selected" : ""}`}
              onClick={() => handleTemplateClick(template)}
            >
              {template}
              <Collapse in={selectedTemplate === template} animateOpacity>
                <Icon as={CheckIcon} ml={2} />
              </Collapse>
            </ListItem>
          ))}
        </List>
      </Box>
      <Button
        leftIcon={<AttachmentIcon />}
        onClick={handleChooseDestinationClick}
        colorScheme="blue"
        className="button"
      >
        Choose destination
      </Button>
      <Input
        type="file"
        accept="directory"
        onChange={handleFileChange}
        display="none"
        id="destination-input"
      />
      <Button
        leftIcon={<CheckIcon />}
        onClick={handleDuplicateClick}
        isDisabled={selectedTemplate === null || destination === null}
        colorScheme="blue"
        className="button" >
        Duplicate
        {selectedTemplate === null || destination === null ? (
          <Tooltip label="Please select a template and a destination" placement="top">
            <Icon as={WarningIcon} ml={2} />
          </Tooltip>
        ) : null}
      </Button>
    </VStack>
  );
};

export default MainPage;
