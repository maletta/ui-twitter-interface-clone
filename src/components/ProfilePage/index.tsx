import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Mauricio Montes Maletta</h1>
        <h2>@muleke_kawaii</h2>

        <p>
          Can be find on{' '}
          <a href="https://github.com/maletta" target="_blank" rel="noreferrer">
            Github Maletta 💼
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 27 de Dezembro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>152</strong>
          </span>
          <span>
            <strong>1098</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
