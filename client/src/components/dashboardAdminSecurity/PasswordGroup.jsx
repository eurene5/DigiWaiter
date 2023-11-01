import React,{ useState } from "react";
import {Box, Input, Icon, Text, Divider, Button} from "@chakra-ui/react";
import { BiBarChart } from "react-icons/bi";


const PasswordInput = () =>{
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
  
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }
  
    const handleSubmit = () => {
        if (password === confirmPassword) {
            console.log('Les mots de passe correspondent :', password);
            setPasswordsMatch(true);
        } else {
            console.log('Les mots de passe ne correspondent pas');
            setPasswordsMatch(false);
        }
    }
  
    return (
        <Box w="70%">
            <label ><Text fontWeight="semibold">Entrer le nouveau mot de passe</Text></label>
            <Input
                mt="20px"
                backgroundColor="#e1e1e1"
                size="md"
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={handlePasswordChange}
            />
            <label ><Text fontWeight="semibold">Confirmer votre nouveau mot de passe</Text></label>
            <Input
                mt="20px"
                backgroundColor="#e1e1e1"
                size="md"
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            {!passwordsMatch && <Text color="red">Les mots de passe ne correspondent pas.</Text>}
            <Button w="full" mt="20px" color="white" backgroundColor="#3FCB80" onClick={handleSubmit}>Changer de mot de passe</Button>
        </Box>
    )
}

const PasswordGroup = () =>{
    return(
        <Box m="10px 0px 0px 40px" w="40%">
            <Text fontWeight="semibold" color="#394D5F"><Icon as={BiBarChart}/> Changer de mot de passe</Text>
            <Divider w="full" mb="15px"/>
            <PasswordInput/>
        </Box>
    )

}

export default PasswordGroup;