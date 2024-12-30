export default {
  methods: {
    confirmDialog(title, head, confirmButtonText, cancelButtonText) {
      const config = {
        title: "Please Confirm",
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: "YES",
        cancelTitle: "NO",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true
      };
      return new Promise(resolve => {
        this.$swal
          .fire({
            title: "",
            text: "",
            html: `
                    <div class="ConfirmUser">       
                          <div class="confirmDialogBody">
                          <h4>${head || ""}</h4>
                          <p>${title}</p>
                          </div>
                      </div>`,
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: confirmButtonText ?? "Confirm",
            cancelButtonText: cancelButtonText ?? "Cancel",
            confirmButtonColor: "#c1c1c1",
            cancelButtonColor: "#ce7255",
            customClass: {
              actions: "swal-sq-actions",
              confirmButton: "swal-sq-confirmButtonDialog",
              denyButton: "swal-sq-denyButton",
              cancelButton: "swal-sq-cancelButton"
            }
            // denyButtonText: `Don't save`,
          })
          .then(result => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              resolve(true);
              // Swal.fire('Saved!', '', 'success');
            } else if (result.isDenied) {
              resolve(false);
              // Swal.fire('Changes are not saved', '', 'info');
            } else {
              resolve(false);
            }
          })
          .catch(() => resolve(false));
      });
    },
    deleteDialog(title, head) {
      return new Promise(resolve => {
        this.$swal.fire({
          title: "",
          text: "",
          html: `
            <div class="ConfirmUser">      
                  <div class="confirmDialogBody">
                  <h4>${head || "Delete"}</h4>
                  <p>${title}</p>
                  </div>
              </div>`,
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          showCloseButton: true,
          confirmButtonColor: "#c1c1c1",
          cancelButtonColor: "#ce7255",
          customClass: {
            actions: "swal-sq-actions",
            confirmButton: "swal-sq-confirmButton",
            denyButton: "swal-sq-denyButton",
            cancelButton: "swal-sq-cancelButton"
          }
          // denyButtonText: `Don't save`,
        })
          .then(result => {
            if (result.isConfirmed) {
              resolve(true);
            } else if (result.isDenied) {
              resolve(false);
            } else {
              resolve(false);
            }
          })
          .catch(() => resolve(false));
      });
    }
  }
};
