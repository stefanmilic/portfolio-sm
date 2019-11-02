import React, { useState } from 'react';
import { block } from 'bem-cn';
import Typist from 'react-typist';
import { Button, Modal } from 'react-bootstrap';
import { myProjects } from 'src/Data/Projects';

const b = block('my-work');

interface ProjectProps {
  name: string;
  image: string;
  onHandleShow(): void;
}

interface ModalProps {
  show: boolean;
  name: string;
  text: string;
  onClose(): void;
}

const Project: React.FC<ProjectProps> = ({ onHandleShow, name, image }) => (
  <div className={b('item')} onClick={onHandleShow}>
    <div id='cover' className={b('cover')}>
      <img src={image} alt='' />
      <div className={b('overlay')}>
        <div className={b('text')}>{name}</div>
      </div>
    </div>
    <div className={b('tags')}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://shopp-cart.herokuapp.com'
        className={b('btn-light')}
      >
        <i className='fas fa-eye'></i>Project
      </a>
      <a href='#' className={b('btn-dark')}>
        <i className='fab fa-github'></i>Github
      </a>
    </div>
  </div>
);

function ModalContainer({ show, onClose, text, name }: ModalProps) {
  return (
    <Modal show={show} onHide={onClose} className={String(b('modal'))}>
      <Modal.Header>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const MyWork = () => {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);
  const [modalData, setModalData] = useState({ text: '', name: '' });

  const handleClose = () => setShow(false);

  const handleShow = (project: any) => {
    setShow(true);
    setModalData(project);
  };
  return (
    <main className={b()}>
      <h1>
        My <span className={b('text-secondary')}>Work</span>
      </h1>
      <div className={b('sm-heading')}>
        <h2 className={b('scale')}>
          <Typist
            avgTypingDelay={70}
            startDelay={100}
            onTypingDone={() => setDone(true)}
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
          >
            Check out some of my projects...
          </Typist>
        </h2>
      </div>

      {done ? (
        <div className={b('projects')}>
          {myProjects.map(project => (
            <Project
              key={project.id}
              onHandleShow={() => handleShow(project)}
              {...project}
            />
          ))}
          <ModalContainer
            show={show}
            onClose={handleClose}
            name={modalData.name}
            text={modalData.text}
          />
        </div>
      ) : null}
    </main>
  );
};

export default MyWork;
