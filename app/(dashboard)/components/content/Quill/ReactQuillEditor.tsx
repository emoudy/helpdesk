import ReactQuill from 'react-quill';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css';

interface ReactQuillEditorProps {
  id: string;
  description: string;
  setDescription: (value: string) => void;
}

export default function ReactQuillEditor({ id, description, setDescription }:ReactQuillEditorProps) {
  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const handleDescription = (value: string) => {
    const sanitizedHTML = DOMPurify.sanitize(value);
    setDescription(sanitizedHTML);
  };

  return (
    <ReactQuill
      id={id}
      className="text-editor"
      theme="snow"
      formats={[
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
      ]}
      placeholder="Write the best description possible..."
      modules={modules}
      onChange={handleDescription}
      value={description}
    />
  );
}
