import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUp, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface UploadedDocument {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;
  category: string;
}

/**
 * Design: Modernes Finanz-Dashboard
 * - Großer Drag-and-Drop Bereich mit visueller Rückmeldung
 * - Klare Dateiauflistung mit Lösch-Option
 */

interface DocumentUploadProps {
  category: string;
  onDocumentsChange?: (documents: UploadedDocument[]) => void;
}

export default function DocumentUpload({ category, onDocumentsChange }: DocumentUploadProps) {
  const [documents, setDocuments] = useState<UploadedDocument[]>([
    {
      id: '1',
      name: 'Lohnsteuerbescheinigung_2024.pdf',
      size: 245000,
      uploadedAt: new Date().toISOString(),
      category: category
    }
  ]);

  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  };

  const processFiles = (files: File[]) => {
    const validFiles = files.filter(file => {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      const maxSize = 10 * 1024 * 1024; // 10 MB

      if (!validTypes.includes(file.type)) {
        toast.error(`${file.name}: Ungültiger Dateityp. Nur PDF, JPG und PNG erlaubt.`);
        return false;
      }

      if (file.size > maxSize) {
        toast.error(`${file.name}: Datei zu groß. Maximum 10 MB.`);
        return false;
      }

      return true;
    });

    const newDocuments = validFiles.map(file => ({
      id: Date.now().toString() + Math.random(),
      name: file.name,
      size: file.size,
      uploadedAt: new Date().toISOString(),
      category: category
    }));

    setDocuments([...documents, ...newDocuments]);
    onDocumentsChange?.([...documents, ...newDocuments]);

    if (newDocuments.length > 0) {
      toast.success(`${newDocuments.length} Datei(en) hochgeladen`);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteDocument = (id: string) => {
    const updatedDocuments = documents.filter(doc => doc.id !== id);
    setDocuments(updatedDocuments);
    onDocumentsChange?.(updatedDocuments);
    toast.success('Datei gelöscht');
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="font-display">Dokumente hochladen</CardTitle>
          <CardDescription>
            Laden Sie Ihre Steuerdokumente für die Kategorie "{category}" hoch
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-all cursor-pointer ${
              isDragging
                ? 'border-blue-400 bg-blue-50'
                : 'border-slate-300 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileSelect}
              className="hidden"
              aria-label="Datei hochladen"
            />
            
            <FileUp className={`w-16 h-16 mx-auto mb-4 transition-colors ${
              isDragging ? 'text-blue-600' : 'text-slate-400'
            }`} />
            
            <p className="text-lg font-medium text-slate-900 mb-2">
              Dateien hier ablegen oder klicken zum Durchsuchen
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Unterstützte Formate: PDF, JPG, PNG (max. 10 MB pro Datei)
            </p>
            
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Dateien auswählen
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      {documents.length > 0 && (
        <Card className="bg-white border-slate-200">
          <CardHeader>
            <CardTitle className="font-display">Hochgeladene Dokumente</CardTitle>
            <CardDescription>
              {documents.length} Datei(en) hochgeladen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between bg-green-50 border border-green-200 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 truncate">
                        {doc.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {formatFileSize(doc.size)} • {new Date(doc.uploadedAt).toLocaleDateString('de-DE')}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteDocument(doc.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Info Card */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">Wichtige Hinweise:</p>
              <ul className="space-y-1 text-blue-800">
                <li>• Alle Dokumente werden lokal gespeichert und nicht übertragen</li>
                <li>• Stellen Sie sicher, dass alle erforderlichen Dokumente hochgeladen sind</li>
                <li>• Scans sollten gut lesbar und vollständig sein</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
