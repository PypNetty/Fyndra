import { useState, useRef } from "react";
import { useToastStore } from "../lib/toast";

interface AvatarUploadProps {
  currentAvatar?: string;
  userName: string;
  onAvatarChange?: (file: File) => void;
}

const AvatarUpload = ({ currentAvatar, userName, onAvatarChange }: AvatarUploadProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addToast = useToastStore((state) => state.addToast);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      addToast({
        type: 'error',
        title: 'Format non supporté',
        message: 'Veuillez sélectionner une image (PNG, JPG, JPEG, etc.)'
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      addToast({
        type: 'error',
        title: 'Fichier trop volumineux',
        message: 'La taille de l\'image ne doit pas dépasser 5MB'
      });
      return;
    }

    setIsUploading(true);

    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      onAvatarChange?.(file);
      
      addToast({
        type: 'success',
        title: 'Avatar mis à jour',
        message: 'Votre photo de profil a été modifiée avec succès'
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erreur d\'upload',
        message: 'Une erreur est survenue lors du téléchargement'
      });
    } finally {
      setIsUploading(false);
    }
  };

  const initials = userName.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="relative">
      <div
        className={`relative w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-white text-2xl font-bold cursor-pointer transition-all duration-300 ${
          isHovered ? 'scale-105 shadow-lg shadow-blue-500/30' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => fileInputRef.current?.click()}
      >
        {currentAvatar ? (
          <img 
            src={currentAvatar} 
            alt="Avatar" 
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <span>{initials}</span>
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/40 rounded-full flex items-center justify-center transition-opacity duration-300 ${
          isHovered || isUploading ? 'opacity-100' : 'opacity-0'
        }`}>
          {isUploading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
        </div>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <p className="text-xs text-white/50 text-center mt-2">
        Cliquez pour changer
      </p>
    </div>
  );
};

export default AvatarUpload;
