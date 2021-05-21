function shareToWhatsapp() {
    const form = document.getElementById("blood_rq_details");

    const formData = {};
    const formElements = Array.from(form.elements);
    formElements.forEach((e) => {
        formData[e.attributes.id.value] = e.value.trim();
    })

    const patient_data = [];

    // actual data
    if(formData.ngoName) {
        patient_data.push(`🔴 *${formData.ngoName}*🔴`);
        patient_data.push(" ");
    }
    patient_data.push("🩸 *Blood Request* 🩸")
    patient_data.push(`🩸 *${formData.bloodGroup} | ${formData.requestType}*`); //blood group
    patient_data.push(`*#${formData.city} Request*`);
    patient_data.push(" ");
    patient_data.push(`💉 Patient Name : *${formData.patientName}*`);
    patient_data.push(`💉 Age : *${formData.age}*`);
    patient_data.push(`💉 Blood group : *${formData.bloodGroup} | ${formData.noOfUnits} Units*`);
    patient_data.push(`💉 Need for : *${formData.needFor}*`);
    patient_data.push(`💉 Hospital Name : *${formData.hospitalName}*`);
    patient_data.push(`💉 Date & Time : *${formData.dateNTime}*`);
    patient_data.push(`💉 Attender Name & Number : *${formData.attenderNameNumber}*`);
    patient_data.push(" ");
    if(formData.additionalContext) {
        patient_data.push(`Additional Details : *${formData.additionalContext}*`);
        patient_data.push(" ");
    }
    patient_data.push("----------------------------------------------------");
    patient_data.push(`✅ Verified By *${formData.verifiedBy}*`);
    patient_data.push(`✅ Verified and Posted On : *${formData.requestRaisedDate}*`);
    patient_data.push(" ");
    patient_data.push("💉 *Donate BLOOD Save LIFE*");

    window.location.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        patient_data.join("\n")
    )}`;
}
