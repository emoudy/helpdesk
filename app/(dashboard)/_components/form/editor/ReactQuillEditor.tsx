import ReactQuill from 'react-quill';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css';


const themeOptions = {
  read: "bubble",
  edit: "snow",
  create: "snow",
};


interface ReactQuillEditorProps {
  actionType: string
  id: string;
  newTicket: { title: string, description: string, priority: string };
  setNewTicket: (newTicket: { title: string; description: string; priority: string }) => void;
}
export default function ReactQuillEditor({ actionType = "read", id, newTicket, setNewTicket }:ReactQuillEditorProps) {
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
    setNewTicket({ ...newTicket, description: sanitizedHTML});
  };

  return (
    <ReactQuill
      id={id}
      theme={themeOptions[actionType]}
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
      value={newTicket.description}
      className='quill-editor bg-white rounded-lg'
    />
  );
}
