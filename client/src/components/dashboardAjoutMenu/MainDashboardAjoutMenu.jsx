import React from 'react'
import { Box, Button, Container, FormControl, FormLabel, HStack, Heading, Icon, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Text, VStack } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { useDropzone } from 'react-dropzone'
import { BiCamera } from 'react-icons/bi'
import { CreateMenu } from '@/Services/menus'
import { useMutation } from 'react-query'

const tests = ['Wrap', 'Tacos', 'Pizza', 'Burger', 'Kebab', 'Boisson' ]
const catOptions = ['Viande', 'Sauce', 'Choix supplémentaires']

const MainDashboardAjoutMenu = () => {
    
    const { getRootProps, getInputProps } = useDropzone();
  
    const { isLoading: isUpdating, mutate } = useMutation(async (formData) => {
        try {
        // Vous pouvez envoyer formData directement au lieu de le transformer en objet
        await CreateMenu('blabla', formData);
        } catch (error) {
        console.error('Erreur lors de la création du menu :', error);
        // Gérer l'erreur comme nécessaire
        }
    });

    const handleFileChange = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);

        // Appel à la fonction de mutation avec FormData
        mutate(formData);
    };

  return (
    <HStack justifyContent='space-around'>
       <form method="post" onSubmit={mutate}>
        <VStack color='#292D32' spacing='18px'>
                <Heading as='h6' color='#292D32'>Créer un nouveau menu</Heading>
                <FormControl>
                    <FormLabel fontWeight='bold'>Nom du menu</FormLabel>
                    <Input type='text' name='nomMenu' bgColor='rgba(217, 217, 217, 0.79)' border='1px solid rgba(217, 217, 217, 0.37)'/>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'>Les ingrédients composant le menu</FormLabel>
                    <Input type='text' name='ingredient' bgColor='rgba(217, 217, 217, 0.79)' border='1px solid rgba(217, 217, 217, 0.37)'/>
                </FormControl>
                <FormControl>
                    <FormLabel  fontWeight='bold'>La catégorie du menu</FormLabel>
                    <Select
                        name='categorieMenu'
                        fontWeight='semibold'
                        textAlign='center'
                        placeholder='Choisissez la catégorie de votre menu'
                        bgColor='rgba(217, 217, 217, 0.79)'
                        border='1px solid rgba(217, 217, 217, 0.37)'
                    >
                        {
                            tests.map((test, key) => {
                                return (
                                    <option key={key}>{test}</option>
                                )
                            })
                        }

                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'>Prix du menu</FormLabel>
                    <NumberInput min={10000} step={50} name='prixMenu' >
                        <NumberInputField
                            fontWeight='semibold'
                            textAlign='center'
                            bgColor='rgba(217, 217, 217, 0.79)'
                            border='1px solid rgba(217, 217, 217, 0.37)'                   
                        />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <Text fontWeight='bold' color='#394D5F' borderBottom='1px solid #D9D9D9' w='100%'>Les options</Text>
                <Text fontSize='.9rem' fontWeight='medium' textAlign='start' w='100%' mt='-5px'>Ajouter des options pour rendre votre menu personnalisable</Text>
                <HStack>
                    <FormControl>
                        <FormLabel  fontWeight='bold'>La catégorie de l&apos;option</FormLabel>
                        <Select
                            name='categorieOption'
                            fontWeight='semibold'
                            textAlign='center'
                            bgColor='rgba(217, 217, 217, 0.79)'
                            border='1px solid rgba(217, 217, 217, 0.37)'

                        >
                            {
                                catOptions.map((catOption, key) => {
                                    return (
                                        <option key={key}>{catOption}</option>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontWeight='bold'>Nombre de choix possible</FormLabel>
                        <NumberInput min={2} max={6} step={1} name='nombreChoix' >
                            <NumberInputField
                                fontWeight='semibold'
                                textAlign='center'
                                bgColor='rgba(217, 217, 217, 0.79)'
                                border='1px solid rgba(217, 217, 217, 0.37)'                   
                            />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl>
                        <FormLabel fontWeight='bold'>Nom de l&apos;option</FormLabel>
                        <Input name='nomOption' type='text' bgColor='rgba(217, 217, 217, 0.79)' border='1px solid rgba(217, 217, 217, 0.37)'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontWeight='bold'>Ajouter un prix (facultatif)</FormLabel>
                        <NumberInput min={500} step={50} name='ajoutPrix' >
                            <NumberInputField
                                fontWeight='semibold'
                                textAlign='center'
                                bgColor='rgba(217, 217, 217, 0.79)'
                                border='1px solid rgba(217, 217, 217, 0.37)'                   
                            />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </HStack>
                <Button
                    type='button'
                    w='full'
                    colorScheme='green'
                    variant='outline'
                    leftIcon={<FaPlus/>}
                >
                    Ajouter un option
                </Button>
                <Button
                    disabled={isUpdating}
                    name='submit'
                    type='submit'
                    bgColor='rgba(57, 77, 95, .85)'
                    w='full'
                    color='white'
                    _hover={{bg: 'rgba(49, 64, 77, .85)'}}
                >
                    Créer le menu
                </Button>
            </VStack>
            <VStack spacing='100px' pt='150px'>
                <Container>
                    <VStack {...getRootProps({className: 'dropzone'})}
                        bgColor='rgba(217, 217, 217, .37)'
                        borderRadius='35px'
                        py='60px'
                        px='20px'
                    >
                        <Input {...getInputProps()}  onChange={(e) => handleFileChange(e.target.files)} />
                        <Icon as={BiCamera} w='70px' h='65px' color="#292D32" />
                        <Text fontWeight='bold' color='#292D32'>Ajouter une photo pour illustrer votre menu</Text>
                    </VStack>
                </Container>
                <Image src='/./assets/Chief.png' />
            </VStack>
       </form>
        
    </HStack>
  )
}

export default MainDashboardAjoutMenu