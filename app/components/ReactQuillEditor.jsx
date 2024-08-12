import ReactQuill from 'react-quill';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css';

export default function ReactQuillEditor({ description, setDescription }) {
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

  const handleDescription = value => {
    const sanitizedHTML = DOMPurify.sanitize(value);
    setDescription(sanitizedHTML);
  };

  return (
    <ReactQuill
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
      placeholder="Write the best requirements possible..."
      modules={modules}
      onChange={e => handleDescription(e)}
      value={description}
    />
  );
}
