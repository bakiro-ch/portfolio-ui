'use client';

import { useState, ChangeEvent, useEffect, useRef } from "react";
import { XIcon, ImagePlus } from "lucide-react";
import { useController, Control } from "react-hook-form";
import { ProjectForm } from "@/app/admin/projects/new/page";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface ProjectImageProps {
  control: Control<ProjectForm>;
  error?: string;
}

export default function ProjectImage({ control, error: formError }: ProjectImageProps) {

  const { field } = useController({
    name: "image",
    control,
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setLocalError(null);
    
    if (file) {
      if (!file.type.startsWith('image/')) {
        setLocalError('Please upload an image file only (PNG, JPG, JPEG, WebP)');
        field.onChange(null);
        event.target.value = '';
        return;
      }

      const maxSize = 5 * 1024 * 1024; 
      if (file.size > maxSize) {
        setLocalError('File size must be less than 5MB');
        field.onChange(null);
        event.target.value = '';
        return;
      }

      setPreviewUrl(URL.createObjectURL(file));
      field.onChange(file);
    } else {
      field.onChange(null);
    }
  };

  const handleRemove = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setLocalError(null);
    field.onChange(null);
    
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  };

  const displayError = localError || formError;

  return (
    <Field>
      <FieldLabel htmlFor="projectImage">Project Image</FieldLabel>
      
      {!field.value ? (
        <div className="mt-2">
          <label 
            htmlFor="projectImage"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/30 rounded-lg cursor-pointer hover:bg-muted/50 hover:border-primary/50 transition-all"
          >
            <ImagePlus className="w-8 h-8 text-muted-foreground mb-2" />
            <span className="text-sm text-muted-foreground font-medium">Add</span>
          </label>
          <Input 
            id="projectImage" 
            type="file" 
            accept="image/*"
            className="hidden"
            ref={inputRef}
            onChange={handleFileChange} 
          />
        </div>
      ) : (
        <AttachmentGroup className="w-full max-w-sm mt-2">
          <Attachment orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={previewUrl!} alt="Project preview" className="object-cover" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{(field.value as File).name}</AttachmentTitle>
              <AttachmentDescription>
                {(field.value as File).type.split('/')[1].toUpperCase()} · {formatSize((field.value as File).size)}
              </AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Remove image" onClick={handleRemove}>
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </AttachmentGroup>
      )}
      
      {displayError && (
        <p className="text-sm text-red-500 mt-2">* {displayError}</p>
      )}
    </Field>
  );
}

// 'use client';

// import { useState, ChangeEvent, useEffect } from "react";
// import { XIcon, ImagePlus } from "lucide-react";
// import {
//   Attachment,
//   AttachmentAction,
//   AttachmentActions,
//   AttachmentContent,
//   AttachmentDescription,
//   AttachmentGroup,
//   AttachmentMedia,
//   AttachmentTitle,
// } from "@/components/ui/attachment";
// import { Field, FieldLabel } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";

// export default function ProjectImage() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     setError(null);
    
//     if (file) {
//       // ✅ Layer 2: Validate file type
//       if (!file.type.startsWith('image/')) {
//         setError('Please upload an image file only (PNG, JPG, JPEG, WebP)');
//         event.target.value = '';
//         return;
//       }

//       // ✅ Validate file size (max 5MB)
//       const maxSize = 5 * 1024 * 1024; // 5MB in bytes
//       if (file.size > maxSize) {
//         setError('File size must be less than 5MB');
//         event.target.value = '';
//         return;
//       }

//       setSelectedFile(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleRemove = () => {
//     if (previewUrl) {
//         URL.revokeObjectURL(previewUrl); // 👈 Clean up memory!
//     }
//     setSelectedFile(null);
//     setPreviewUrl(null);
//     setError(null);
//   };

//     // Also clean up when component unmounts
//     useEffect(() => {
//     return () => {
//         if (previewUrl) {
//         URL.revokeObjectURL(previewUrl);
//         }
//     };
//     }, [previewUrl]);

//   const formatSize = (bytes: number) => {
//     if (bytes < 1024) return bytes + " B";
//     if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
//     return (bytes / 1048576).toFixed(1) + " MB";
//   };

//   return (
//         <Field>
//           <FieldLabel htmlFor="projectImage">Project Image</FieldLabel>
          
//           {!selectedFile ? (
//             <div className="mt-2">
//               <label 
//                 htmlFor="projectImage"
//                 className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/30 rounded-lg cursor-pointer hover:bg-muted/50 hover:border-primary/50 transition-all"
//               >
//                 <ImagePlus className="w-8 h-8 text-muted-foreground mb-2" />
//                 <span className="text-sm text-muted-foreground font-medium">Add</span>
//               </label>
//               <Input 
//                 id="projectImage" 
//                 type="file" 
//                 accept="image/*" // 👈 Layer 1: HTML restriction
//                 className="hidden"
//                 onChange={handleFileChange} 
//               />
//             </div>
//           ) : (
//             <AttachmentGroup className="w-full max-w-sm mt-2">
//               <Attachment orientation="vertical">
//                 <AttachmentMedia variant="image">
//                   <img src={previewUrl!} alt="Project preview" className="object-cover" />
//                 </AttachmentMedia>
//                 <AttachmentContent>
//                   <AttachmentTitle>{selectedFile.name}</AttachmentTitle>
//                   <AttachmentDescription>
//                     {selectedFile.type.split('/')[1].toUpperCase()} · {formatSize(selectedFile.size)}
//                   </AttachmentDescription>
//                 </AttachmentContent>
//                 <AttachmentActions>
//                   <AttachmentAction aria-label="Remove image" onClick={handleRemove}>
//                     <XIcon />
//                   </AttachmentAction>
//                 </AttachmentActions>
//               </Attachment>
//             </AttachmentGroup>
//           )}
          
//           {error && (
//             <p className="text-sm text-primary mt-2">* {error}</p>
//           )}
//         </Field>
//   );
// }