import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Link, Video, Trash2, Play, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// Helper function to extract YouTube Video ID
function getYouTubeId(url) {
  if (!url) return null;
  // If it's a direct 11-char ID
  if (url.trim().length === 11 && !url.includes('/') && !url.includes('?')) {
    return url.trim();
  }
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default function VideoSection() {
  const { video } = siteConfig;
  const fileInputRef = useRef(null);

  // Core State
  const [videoSource, setVideoSource] = useState(() => {
    return localStorage.getItem('supporticon_video_source') || null;
  });
  const [youtubeUrlInput, setYoutubeUrlInput] = useState('');
  const [youtubeId, setYoutubeId] = useState(() => {
    return localStorage.getItem('supporticon_video_youtube_id') || '';
  });
  const [youtubeUrl, setYoutubeUrl] = useState(() => {
    return localStorage.getItem('supporticon_video_youtube_url') || '';
  });
  
  const [localVideoUrl, setLocalVideoUrl] = useState('');
  const [localFileName, setLocalFileName] = useState(() => {
    return localStorage.getItem('supporticon_video_local_name') || '';
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [dragActive, setDragActive] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    if (videoSource) {
      localStorage.setItem('supporticon_video_source', videoSource);
    } else {
      localStorage.removeItem('supporticon_video_source');
    }
  }, [videoSource]);

  useEffect(() => {
    if (youtubeId) {
      localStorage.setItem('supporticon_video_youtube_id', youtubeId);
      localStorage.setItem('supporticon_video_youtube_url', youtubeUrl);
    } else {
      localStorage.removeItem('supporticon_video_youtube_id');
      localStorage.removeItem('supporticon_video_youtube_url');
    }
  }, [youtubeId, youtubeUrl]);

  // Load YouTube Video
  const handleLoadYouTube = (e) => {
    e.preventDefault();
    const id = getYouTubeId(youtubeUrlInput);
    if (id) {
      setYoutubeId(id);
      setYoutubeUrl(youtubeUrlInput);
      setVideoSource('youtube');
      setYoutubeUrlInput('');
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid YouTube URL or Video ID. Please check and try again.');
    }
  };

  // Load Local Video File
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      loadLocalFile(file);
    }
  };

  const loadLocalFile = (file) => {
    if (!file.type.startsWith('video/')) {
      setErrorMsg('Please select a valid video file format (MP4, WebM, etc.).');
      return;
    }
    const url = URL.createObjectURL(file);
    setLocalVideoUrl(url);
    setLocalFileName(file.name);
    setVideoSource('local');
    localStorage.setItem('supporticon_video_local_name', file.name);
    setErrorMsg('');
  };

  // Drag and Drop listeners
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      loadLocalFile(e.dataTransfer.files[0]);
    }
  };

  // Reset / Clear Video
  const handleClearVideo = () => {
    if (localVideoUrl) {
      URL.revokeObjectURL(localVideoUrl);
    }
    setVideoSource(null);
    setLocalVideoUrl('');
    setLocalFileName('');
    setYoutubeId('');
    setYoutubeUrl('');
    setErrorMsg('');
    localStorage.removeItem('supporticon_video_local_name');
  };

  return (
    <motion.div
      className="pb-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{ marginBottom: '64px' }}
    >
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
          style={{
            background: 'rgba(47, 168, 102, 0.12)',
            color: '#1e7b48',
            border: '1px solid rgba(47, 168, 102, 0.28)',
            fontSize: '11px',
            letterSpacing: '0.12em',
          }}
        >
          {video.subtitle}
        </span>
        <h2
          style={{
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: '700',
            color: '#1F1F1F',
            letterSpacing: '-0.025em',
            marginBottom: '14px',
            lineHeight: '1.2',
          }}
        >
          {video.title}
        </h2>
        <p style={{ fontSize: '15px', color: '#5B5B5B', lineHeight: '1.75', maxWidth: '82%' }}>
          {video.description}
        </p>
      </div>

      {/* Video Content / Upload Area */}
      <div style={{ maxWidth: '520px', width: '100%' }}>
        <AnimatePresence mode="wait">
          {!videoSource ? (
            /* Upload & Input Dashboard */
            <motion.div
              key="uploader"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              style={{
                background: '#FFFFFF',
                border: dragActive ? '2px dashed #2FA866' : '2px dashed #CFEAD8',
                borderRadius: '6px',
                padding: '36px 28px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(50, 100, 70, 0.04)',
                transition: 'border-color 0.2s ease',
              }}
            >
              <Video className="w-10 h-10 mx-auto mb-4" style={{ color: '#2FA866' }} />
              <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1F1F1F', marginBottom: '8px' }}>
                Add Company Introduction Video
              </h3>
              <p style={{ fontSize: '13px', color: '#7A7A7A', marginBottom: '24px', maxWidth: '420px', marginInline: 'auto' }}>
                Upload a local video file directly, or paste a YouTube video link to share your SaaS support strategy.
              </p>

              {/* Action Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Column 1: Local Upload */}
                <div 
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #D7F0DE',
                    borderRadius: '4px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Upload className="w-6 h-6 mb-2" style={{ color: '#2FA866' }} />
                  <span style={{ fontSize: '13px', fontWeight: '500', color: '#1F1F1F', marginBottom: '12px' }}>
                    Local Video File
                  </span>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="video/*"
                    style={{ display: 'none' }}
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    style={{
                      background: '#F2FBF4',
                      border: '1px solid #CFEAD8',
                      borderRadius: '6px',
                      padding: '6px 14px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#1e7b48',
                      cursor: 'pointer',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#E8F5ED'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#F2FBF4'}
                  >
                    Select File
                  </button>
                </div>

                {/* Column 2: YouTube URL */}
                <form 
                  onSubmit={handleLoadYouTube}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #D7F0DE',
                    borderRadius: '4px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                    <Link className="w-6 h-6" style={{ color: '#2FA866' }} />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: '500', color: '#1F1F1F', marginBottom: '10px' }}>
                    YouTube Link / ID
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <input
                      type="text"
                      placeholder="Paste link or ID..."
                      value={youtubeUrlInput}
                      onChange={(e) => setYoutubeUrlInput(e.target.value)}
                      style={{
                        flex: 1,
                        background: '#F6FCF7',
                        border: '1px solid #D7F0DE',
                        borderRadius: '6px',
                        padding: '6px 10px',
                        fontSize: '12px',
                        color: '#1F1F1F',
                        width: '100%',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        background: '#2FA866',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#1e7b48'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#2FA866'}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>

              {/* Error display */}
              {errorMsg && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#DC2626', fontSize: '12px', marginTop: '16px', justifyContent: 'center' }}>
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </motion.div>
          ) : (
            /* Video Player Screen */
            <motion.div
              key="player"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              {/* Reset Control Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#7A7A7A', fontWeight: '500' }}>
                  {videoSource === 'youtube' ? '🎥 YouTube Video Resource' : `📁 Local File: ${localFileName}`}
                </span>
                <button
                  onClick={handleClearVideo}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'transparent',
                    border: 'none',
                    color: '#DC2626',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(220,38,38,0.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Remove Video
                </button>
              </div>

              {/* Player Container */}
              <div
                className="relative rounded-md overflow-hidden"
                style={{
                  boxShadow: '0 12px 32px rgba(50, 100, 70, 0.08)',
                  border: '1px solid #D7F0DE',
                  background: '#000000',
                  aspectRatio: '16/9',
                  width: '100%',
                }}
              >
                {videoSource === 'youtube' ? (
                  /* YouTube IFrame */
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                    title="Video Player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none', display: 'block', width: '100%', height: '100%' }}
                  />
                ) : localVideoUrl ? (
                  /* Native HTML5 Video Element */
                  <video
                    src={localVideoUrl}
                    controls
                    className="w-full h-full"
                    style={{ display: 'block', width: '100%', height: '100%' }}
                  />
                ) : (
                  /* Expired Local URL Warning */
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    background: 'linear-gradient(135deg, #F6FCF7, #F2FBF4)',
                    textAlign: 'center',
                  }}>
                    <AlertCircle className="w-8 h-8 mb-2" style={{ color: '#2FA866' }} />
                    <p style={{ fontSize: '13px', fontWeight: '600', color: '#1F1F1F', marginBottom: '4px' }}>
                      Session File Expired
                    </p>
                    <p style={{ fontSize: '11px', color: '#5B5B5B', maxWidth: '300px', marginBottom: '14px' }}>
                      Browser security prevents automatic reloading of local video files.
                    </p>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="video/*"
                      style={{ display: 'none' }}
                      id="reupload-video-input"
                    />
                    <button
                      onClick={() => document.getElementById('reupload-video-input').click()}
                      style={{
                        background: '#2FA866',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '6px 14px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#1e7b48'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#2FA866'}
                    >
                      Reload local video
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Warm divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          height: '1.5px',
          background: 'linear-gradient(to right, #2FA866 0%, rgba(47,168,102,0.2) 60%, transparent 100%)',
          marginTop: '64px',
          borderRadius: '2px',
          transformOrigin: 'left center',
        }}
      />
    </motion.div>
  );
}
