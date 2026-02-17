'use client';

import { motion } from 'framer-motion';

interface CornerPetProps {
  type: 'cat' | 'guinea-pig' | 'dog';
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export default function CornerPet({ 
  type, 
  corner = 'top-right',
  className = '' 
}: CornerPetProps) {
  
  const cornerClasses = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed ${cornerClasses[corner]} ${className} pointer-events-none z-10`}
    >
      <motion.div
        animate={{ y: [-4, 0, -4] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {type === 'cat' ? <AnimatedCat /> : type === 'guinea-pig' ? <GuineaPigFace /> : <AnimatedDog />}
      </motion.div>
    </motion.div>
  );
}

// Animated Cat from Draft 1
function AnimatedCat() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M85 75 Q95 65 105 60 Q110 55 108 50" 
        stroke="#8B7355" 
        strokeWidth="10" 
        fill="none" 
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 85 75; 8 85 75; 0 85 75; -8 85 75; 0 85 75"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      
      <ellipse cx="60" cy="75" rx="26" ry="22" fill="#8B7355" />
      <circle cx="60" cy="48" r="24" fill="#A0826D" />
      
      <path d="M43 30 L38 12 L48 25 Z" fill="#A0826D">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 43 30; -5 43 30; 0 43 30"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M43 30 L40 18 L46 27 Z" fill="#D4A574" />
      
      <path d="M77 30 L82 12 L72 25 Z" fill="#A0826D">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 77 30; 5 77 30; 0 77 30"
          dur="5s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </path>
      <path d="M77 30 L80 18 L74 27 Z" fill="#D4A574" />
      
      <ellipse cx="50" cy="45" rx="5" ry="7" fill="#2C3E50">
        <animate
          attributeName="ry"
          values="7;1;7"
          dur="4s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="70" cy="45" rx="5" ry="7" fill="#2C3E50">
        <animate
          attributeName="ry"
          values="7;1;7"
          dur="4s"
          repeatCount="indefinite"
        />
      </ellipse>
      
      <ellipse cx="51.5" cy="43" rx="2" ry="2.5" fill="#FFFFFF" opacity="0.8" />
      <ellipse cx="71.5" cy="43" rx="2" ry="2.5" fill="#FFFFFF" opacity="0.8" />
      
      <path d="M60 53 L57 56 L63 56 Z" fill="#E8A5A5" />
      
      <path d="M60 56 Q53 59 48 56" stroke="#6B4E3D" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate
          attributeName="d"
          values="M60 56 Q53 59 48 56; M60 56 Q53 60 48 56; M60 56 Q53 59 48 56"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M60 56 Q67 59 72 56" stroke="#6B4E3D" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate
          attributeName="d"
          values="M60 56 Q67 59 72 56; M60 56 Q67 60 72 56; M60 56 Q67 59 72 56"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
      
      <line x1="30" y1="47" x2="42" y2="46" stroke="#6B4E3D" strokeWidth="1.5" opacity="0.7">
        <animate attributeName="x1" values="30;28;30" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="30" y1="51" x2="42" y2="50" stroke="#6B4E3D" strokeWidth="1.5" opacity="0.7">
        <animate attributeName="x1" values="30;28;30" dur="3s" repeatCount="indefinite" begin="0.2s" />
      </line>
      
      <line x1="90" y1="47" x2="78" y2="46" stroke="#6B4E3D" strokeWidth="1.5" opacity="0.7">
        <animate attributeName="x1" values="90;92;90" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="90" y1="51" x2="78" y2="50" stroke="#6B4E3D" strokeWidth="1.5" opacity="0.7">
        <animate attributeName="x1" values="90;92;90" dur="3s" repeatCount="indefinite" begin="0.2s" />
      </line>
      
      <ellipse cx="60" cy="78" rx="12" ry="14" fill="#D4B8A0" opacity="0.7" />
      <ellipse cx="50" cy="93" rx="5" ry="4" fill="#8B7355" />
      <ellipse cx="70" cy="93" rx="5" ry="4" fill="#8B7355" />
    </svg>
  );
}

// Guinea Pig Face from Draft 1
function GuineaPigFace() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="50" rx="40" ry="42" fill="#D4B48C" />
      <ellipse cx="35" cy="45" rx="14" ry="16" fill="#F5EBD9" opacity="0.5" />
      <ellipse cx="65" cy="45" rx="14" ry="16" fill="#F5EBD9" opacity="0.5" />
      <ellipse cx="20" cy="55" rx="12" ry="15" fill="#C9A86A" opacity="0.4" />
      <ellipse cx="80" cy="55" rx="12" ry="15" fill="#C9A86A" opacity="0.4" />
      
      <ellipse cx="32" cy="18" rx="9" ry="11" fill="#C9A86A">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 32 18; -4 32 18; 0 32 18"
          dur="4s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="33" cy="20" rx="5" ry="7" fill="#E8D4B0" />
      
      <ellipse cx="68" cy="18" rx="9" ry="11" fill="#C9A86A">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 68 18; 4 68 18; 0 68 18"
          dur="4s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </ellipse>
      <ellipse cx="67" cy="20" rx="5" ry="7" fill="#E8D4B0" />
      
      <circle cx="38" cy="42" r="6" fill="#2C3E50">
        <animate attributeName="r" values="6;1;6" dur="3.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="39.5" cy="40" r="2.5" fill="#FFFFFF" opacity="0.9" />
      
      <circle cx="62" cy="42" r="6" fill="#2C3E50">
        <animate attributeName="r" values="6;1;6" dur="3.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="63.5" cy="40" r="2.5" fill="#FFFFFF" opacity="0.9" />
      
      <ellipse cx="50" cy="58" rx="8" ry="7" fill="#A88C5C">
        <animate attributeName="rx" values="8;8.5;8;7.5;8" dur="1s" repeatCount="indefinite" />
      </ellipse>
      
      <ellipse cx="47" cy="58" rx="2" ry="1.5" fill="#6B4E3D" />
      <ellipse cx="53" cy="58" rx="2" ry="1.5" fill="#6B4E3D" />
      
      <line x1="50" y1="62" x2="50" y2="66" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 66 Q50 69 54 66" stroke="#8B6F47" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      <ellipse cx="50" cy="70" rx="8" ry="3" fill="#C9A86A" opacity="0.3" />
      
      <line x1="8" y1="50" x2="28" y2="50" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate attributeName="x1" values="8;5;8" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="8" y1="55" x2="28" y2="54" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate attributeName="x1" values="8;5;8" dur="2s" repeatCount="indefinite" begin="0.3s" />
      </line>
      <line x1="10" y1="60" x2="30" y2="58" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate attributeName="x1" values="10;7;10" dur="2s" repeatCount="indefinite" begin="0.6s" />
      </line>
      
      <line x1="92" y1="50" x2="72" y2="50" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate attributeName="x1" values="92;95;92" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="92" y1="55" x2="72" y2="54" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate attributeName="x1" values="92;95;92" dur="2s" repeatCount="indefinite" begin="0.3s" />
      </line>
      <line x1="90" y1="60" x2="70" y2="58" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate attributeName="x1" values="90;93;90" dur="2s" repeatCount="indefinite" begin="0.6s" />
      </line>
      
      <ellipse cx="30" cy="52" rx="9" ry="7" fill="#E8A5A5" opacity="0.25">
        <animate attributeName="opacity" values="0.25;0.4;0.25" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="70" cy="52" rx="9" ry="7" fill="#E8A5A5" opacity="0.25">
        <animate attributeName="opacity" values="0.25;0.4;0.25" dur="3s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}

// NEW Animated Dog
function AnimatedDog() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dog body */}
      <ellipse cx="65" cy="75" rx="28" ry="24" fill="#C9A86A" />
      
      {/* Dog head */}
      <ellipse cx="55" cy="45" rx="22" ry="20" fill="#D4B48C" />
      
      {/* Floppy ears */}
      <ellipse cx="38" cy="38" rx="10" ry="18" fill="#A88C5C">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 38 38; -8 38 38; 0 38 38"
          dur="3s"
          repeatCount="indefinite"
        />
      </ellipse>
      
      <ellipse cx="72" cy="38" rx="10" ry="18" fill="#A88C5C">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 72 38; 8 72 38; 0 72 38"
          dur="3s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </ellipse>
      
      {/* Eyes - blinking */}
      <ellipse cx="48" cy="43" rx="4" ry="6" fill="#2C3E50">
        <animate
          attributeName="ry"
          values="6;1;6"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </ellipse>
      <circle cx="49" cy="41" r="1.5" fill="#FFFFFF" opacity="0.9" />
      
      <ellipse cx="62" cy="43" rx="4" ry="6" fill="#2C3E50">
        <animate
          attributeName="ry"
          values="6;1;6"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </ellipse>
      <circle cx="63" cy="41" r="1.5" fill="#FFFFFF" opacity="0.9" />
      
      {/* Snout */}
      <ellipse cx="55" cy="52" rx="8" ry="6" fill="#E8D4B0" />
      
      {/* Nose */}
      <ellipse cx="55" cy="54" rx="4" ry="3" fill="#2C3E50" />
      
      {/* Mouth */}
      <path d="M55 57 L55 60" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
      <path d="M51 60 Q55 63 59 60" stroke="#2C3E50" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate
          attributeName="d"
          values="M51 60 Q55 63 59 60; M51 60 Q55 64 59 60; M51 60 Q55 63 59 60"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Tail - wagging */}
      <path 
        d="M90 70 Q98 65 102 58" 
        stroke="#C9A86A" 
        strokeWidth="8" 
        fill="none" 
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 90 70; 15 90 70; 0 90 70; -10 90 70; 0 90 70"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Chest patch */}
      <ellipse cx="65" cy="78" rx="14" ry="16" fill="#F5EBD9" opacity="0.6" />
      
      {/* Paws */}
      <ellipse cx="52" cy="95" rx="5" ry="4" fill="#A88C5C" />
      <ellipse cx="68" cy="95" rx="5" ry="4" fill="#A88C5C" />
      <ellipse cx="78" cy="95" rx="5" ry="4" fill="#A88C5C" />
    </svg>
  );
}