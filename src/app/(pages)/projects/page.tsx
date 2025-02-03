'use client';
import { useState } from 'react';
import ModalImage from 'react-modal-image';
import Image from 'next/image';
import { MotionWrapper } from '@/components/MotionWrapper';

const projects = [
  { id: 1, img: '/images/project1.jpg', title: 'Residential Complex' },
  // ... other projects
];

export default function ProjectsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <MotionWrapper>
      {/* ... existing content */}
      {isOpen && (
        <ModalImage
          large={projects[photoIndex].img}
          alt={projects[photoIndex].title}
          onClose={() => setIsOpen(false)}
        />
      )}
    </MotionWrapper>
  );
}
