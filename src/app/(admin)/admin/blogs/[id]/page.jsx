'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
  Code
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EditBlog = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const resolvedParams = React.use(params);
  const blogId = resolvedParams.id;
  const [editorContent, setEditorContent] = useState('');

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
    content: editorContent,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4',
      },
    },
  });

  useEffect(() => {
    if (editor && editorContent) {
      editor.commands.setContent(editorContent);
    }
  }, [editor, editorContent]);

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  const fetchBlog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/admin/blog?id=${blogId}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch blog');
      }
      const data = await response.json();
      console.log('Fetched blog data:', data); // Debug log
      setTitle(data.title);
      setEditorContent(data.content);
    } catch (error) {
      console.error('Error fetching blog:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to fetch blog', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editor) return;

    try {
      setIsSubmitting(true);
      
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', editor.getHTML());
      formData.append('status', 'draft');
      
      if (featuredImage) {
        formData.append('featuredImage', featuredImage);
      }

      const response = await fetch(`/api/admin/blog?id=${blogId}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update blog');
      }

      const updatedBlog = await response.json();
      console.log('Updated blog:', updatedBlog); // Debug log

      toast.success('Blog updated successfully!', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });

      router.push('/admin/bloglist');
      router.refresh();
    } catch (error) {
      console.error('Error updating blog:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to update blog', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const addImage = () => {
    const url = window.prompt('Enter the URL of the image:');
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt('Enter the URL:');
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (!editor) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <style jsx global>{`
        .ProseMirror {
          min-height: 300px;
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
      <Card>
        <CardHeader>
          <CardTitle>Edit Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image</Label>
              <Input
                id="featuredImage"
                type="file"
                accept="image/*"
                onChange={(e) => setFeaturedImage(e.target.files?.[0] || null)}
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label>Content</Label>
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
                      onClick={addLink}
                      className={editor.isActive('link') ? 'bg-accent text-accent-foreground' : ''}
                      disabled={isSubmitting}
                    >
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={addImage}
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
                  className="prose max-w-none p-4 min-h-[300px] focus:outline-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating...' : 'Update Blog'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBlog; 