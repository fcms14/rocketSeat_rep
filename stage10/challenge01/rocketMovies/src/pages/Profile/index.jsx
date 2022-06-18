import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar} from "./styles";


export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName]               = useState(user.name);
  const [email, setEmail]             = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceHolder;

  const [avatar, setAvatar]           = useState(avatarUrl);
  const [avatarFile, setAvatarFile]   = useState(null);

  async function handleUpdate(){
    const userUpdated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userAssigned = Object.assign(user, userUpdated)
   
    await updateProfile({user: userAssigned, avatarFile});
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>

      <header>
        <Link to='/'> <FiArrowLeft /> </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt="Foto do Usuário" 
          />

          <label htmlFor='avatar'>
            <FiCamera />
            <input
              id='avatar'
              type="file"
              onChange={handleChangeAvatar}
            />

          </label>
        </Avatar>
        
        <Input
          placeholder="Nome" 
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail" 
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha Atual" 
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova Senha" 
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}>

        </Button>
      </Form>

    </Container>
  )
}