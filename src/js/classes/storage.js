export const StorageJs = (type= 'gist', credentials) => {
  if (type === 'gist') {
    return {
      testing: 123,
      setTesting: function(newVal){
        this.testing = newVal
      },
      token: credentials.token,
      file: credentials.file,
      test: function(){ console.log("CRED",this.file); return this.testing},
      get: function(gistId){
        return fetch('https://api.github.com/gists/' + gistId, {
          method: 'GET',
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${this.token}`,
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })
          .then(data => {
            console.log('GOT -- ', { data });
            return data.json();
          })
          .then(content => {
            console.log('NEW from get::', { content });
            return { body: content };
          });
      },
      getContentOrRaw: function(content, rawUrl) {
        // sometimes github comes back empty handed for content, but has raw_url
        return new Promise((resolve, reject) => {
          if (!content && rawUrl) {
            fetch(rawUrl)
              .then(data => data.text())
              .then(rawContent => {
                resolve(rawContent);
              });
          } else {
            resolve(content);
          }
        });
      },
      edit: function(gistId, fileName, content) {
        console.log({ gistId, fileName, content, credentials });
        return fetch('https://api.github.com/gists/' + gistId, {
          method: 'POST',
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${credentials.token}`,
            'X-GitHub-Api-Version': '2022-11-28',
          },
          body: JSON.stringify({
            description: 'upload data from api',
            public: false,
            files: { [fileName]: { content } },
          }),
        }).then(res => res.json());
      },
    };
  } else if (type === 'github') {
    // todo implement
    // const getFile = function(data) {
    //   return fetch(
    //     `https://api.github.com/repos/${data.owner}/${data.repo}/contents/${data.name}`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/vnd.github+json',
    //         Authorization: `Bearer ${data.token}`,
    //       },
    //     }
    //   ).then(res => res.json());
    // };
    // const setFile = function(data) {
    //   //todo this wont work unless adding sha or deleting the file first
    //   console.log({ setToFile: data.content, data });
    //   return fetch(
    //     `https://api.github.com/repos/${data.owner}/${data.repo}/contents/${data.name}`,
    //     {
    //       method: 'PUT',
    //       headers: {
    //         Accept: 'application/vnd.github+json',
    //         Authorization: `Bearer ${data.token}`,
    //       },
    //       body: JSON.stringify({
    //         message: 'upload data from api',
    //         content: data.content,
    //         sha: data.sha,
    //       }),
    //     }
    //   ).then(res => res.json());
    // };
    // return { getFile, setFile, credentials, setCredentials };
  }
  return { getFile: () => {}, setFile: () => {}, credentials, setCredentials };
}