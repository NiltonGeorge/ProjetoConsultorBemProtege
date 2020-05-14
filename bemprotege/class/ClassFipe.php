<?php
    class ClassFipe{

        private $url;

        public function setUrl($url)
        {
            $this->url=file_get_contents($url);
        }

        public function getUrl()
        {
            return json_encode($this->url);
        }

    }