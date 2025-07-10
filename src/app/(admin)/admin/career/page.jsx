"use client";

import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { 
  Bold, 
  Italic, 
  Underline as UnderlineIcon,
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Heading3,
  Image as ImageIcon,
  Link as LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  Code,
  Edit,
  Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast, Toaster } from "react-hot-toast";

const CareerAdmin = () => {
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [careers, setCareers] = useState([]);
  const [editingCareer, setEditingCareer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [deletingCareerId, setDeletingCareerId] = useState(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: 'heading',
          },
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
      }),
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 hover:text-blue-700 underline',
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
        defaultAlignment: 'left',
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4',
      },
    },
  });

  // Fetch careers
  const fetchCareers = async () => {
    try {
      const res = await fetch("/api/admin/career");
      if (!res.ok) throw new Error("Failed to fetch careers");
      const data = await res.json();
      setCareers(data);
    } catch (err) {
      toast.error("Error loading careers");
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editor) return;
    
    setIsSubmitting(true);
    try {
      const url = isEditing 
        ? `/api/admin/career?id=${editingCareer._id}`
        : "/api/admin/career";
      
      const res = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          position,
          experience,
          skills, // comma separated string
          location,
          description: editor.getHTML(),
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `Failed to ${isEditing ? 'update' : 'add'} career`);
      }
      toast.success(`Career ${isEditing ? 'updated' : 'added'} successfully`);
      resetForm();
      fetchCareers();
    } catch (err) {
      toast.error(err.message || `Failed to ${isEditing ? 'update' : 'add'} career`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setPosition("");
    setExperience("");
    setSkills("");
    setLocation("");
    editor.commands.setContent('');
    setEditingCareer(null);
    setIsEditing(false);
  };

  // Handle edit
  const handleEdit = (career) => {
    setEditingCareer(career);
    setIsEditing(true);
    setPosition(career.position);
    setExperience(career.experience);
    setSkills(Array.isArray(career.skills) ? career.skills.join(", ") : career.skills);
    setLocation(career.location);
    editor.commands.setContent(career.description);
  };

  // Handle delete
  const handleDelete = async (id) => {
    setDeletingCareerId(id);
  };

  const confirmDelete = async () => {
    if (!deletingCareerId) return;
    
    try {
      const res = await fetch(`/api/admin/career?id=${deletingCareerId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to delete career");
      }
      toast.success("Career deleted successfully");
      fetchCareers();
    } catch (err) {
      toast.error(err.message || "Failed to delete career");
    } finally {
      setDeletingCareerId(null);
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <style jsx global>{`
        .ProseMirror {
          min-height: 200px;
        }
        .ProseMirror h1 {
          font-size: 2.5em;
          font-weight: 700;
          margin: 1em 0 0.5em;
          line-height: 1.2;
        }
        .ProseMirror h2 {
          font-size: 2em;
          font-weight: 600;
          margin: 1em 0 0.5em;
          line-height: 1.3;
        }
        .ProseMirror h3 {
          font-size: 1.5em;
          font-weight: 600;
          margin: 1em 0 0.5em;
          line-height: 1.4;
        }
        .ProseMirror p {
          margin: 1em 0;
        }
        .ProseMirror ul {
          list-style-type: disc;
          padding-left: 1.5em;
          margin: 1em 0;
        }
        .ProseMirror ol {
          list-style-type: decimal;
          padding-left: 1.5em;
          margin: 1em 0;
        }
        .ProseMirror li {
          margin: 0.5em 0;
        }
      `}</style>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{isEditing ? 'Edit Career' : 'Add New Career'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="position">Position</label>
              <Input
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="e.g. Frontend Developer"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="experience">Experience</label>
              <Input
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="e.g. 2+ years"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="skills">Skills (comma separated)</label>
              <Input
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g. React, Node.js, MongoDB"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Remote, Kochi"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label>Description</label>
              <div className="border rounded-md">
                <div className="flex flex-wrap gap-1 p-2 border-b bg-muted">
                  <div className="flex items-center gap-1 border-r pr-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().toggleBold().run()}
                      className={editor.isActive('bold') ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().toggleItalic().run()}
                      className={editor.isActive('italic') ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().toggleUnderline().run()}
                      className={editor.isActive('underline') ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <UnderlineIcon className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-1 border-r pr-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                      className={editor.isActive('heading', { level: 1 }) ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <Heading1 className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                      className={editor.isActive('heading', { level: 2 }) ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <Heading2 className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                      className={editor.isActive('heading', { level: 3 }) ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <Heading3 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-1 border-r pr-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().toggleBulletList().run()}
                      className={editor.isActive('bulletList') ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().toggleOrderedList().run()}
                      className={editor.isActive('orderedList') ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-1 border-r pr-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().setTextAlign('left').run()}
                      className={editor.isActive({ textAlign: 'left' }) ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().setTextAlign('center').run()}
                      className={editor.isActive({ textAlign: 'center' }) ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().setTextAlign('right').run()}
                      className={editor.isActive({ textAlign: 'right' }) ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <AlignRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-1 border-r pr-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().undo().run()}
                      disabled={isSubmitting}
                    >
                      <Undo className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().redo().run()}
                      disabled={isSubmitting}
                    >
                      <Redo className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const url = window.prompt('Enter the URL:');
                        if (url) {
                          editor.chain().focus().setLink({ href: url }).run();
                        }
                      }}
                      className={editor.isActive('link') ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const url = window.prompt('Enter the URL of the image:');
                        if (url) {
                          editor.chain().focus().setImage({ src: url }).run();
                        }
                      }}
                      disabled={isSubmitting}
                    >
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => editor.chain().focus().toggleCode().run()}
                      className={editor.isActive('code') ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <Code className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <EditorContent 
                  editor={editor} 
                  className="prose max-w-none p-4 min-h-[200px] focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Career" : "Add Career")}
              </Button>
              {isEditing && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={resetForm}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Careers List</CardTitle>
        </CardHeader>
        <CardContent>
          {careers.length === 0 ? (
            <div className="text-gray-500">No careers found.</div>
          ) : (
            <div className="space-y-4">
              {careers.map((career) => (
                <div key={career._id} className="border rounded p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-semibold text-lg">{career.position}</div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(career)}
                        className="h-8 w-8"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(career._id)}
                            className="h-8 w-8 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the career
                              "{career.position}" and remove it from the database.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={confirmDelete}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Delete Career
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">Experience: {career.experience}</div>
                  <div className="text-sm text-gray-600 mb-1">Location: {career.location}</div>
                  <div className="text-sm text-gray-600 mb-1">Skills: {Array.isArray(career.skills) ? career.skills.join(", ") : career.skills}</div>
                  <div className="text-sm text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: career.description }}></div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
};

export default CareerAdmin;