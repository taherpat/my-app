import React from 'react';
import { X } from 'lucide-react';

const ImageDetailsModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{image.filename}</h3>
          <button className="modal-close" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="modal-body">
          <p><span>Class:</span> <span>{image.class}</span></p>
          <p><span>Size:</span> <span>{image.size}</span></p>
          <p><span>Resolution:</span> <span>{image.resolution}</span></p>
          <p><span>Annotated:</span> <span>{image.annotated}</span></p>
          <p><span>Tags:</span> <span>{image.tags.join(', ')}</span></p>
          <p><span>Formats:</span> <span>+</span></p>
          <p><span>annotations_json:</span> <span>{'{x:0, y:0, w:0, h:0}'}</span></p>
        </div>
        <div className="modal-footer">
          <button className="delete-btn">Delete</button>
          <button className="annotate-btn">Annotate</button>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailsModal;