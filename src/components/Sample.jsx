import React from 'react'

const Sample = () => {
  return (
    <>
    




  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg mt-10 rounded-xl">
    <h1 class="text-3xl font-bold mb-6 text-center " style="color:#3b82f6;">Become a Supplier</h1>


    
       <form method="POST" action="{{ route('supplier') }}" enctype="multipart/form-data">
              

      {/* <!-- Personal Information --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-1 font-medium">First Name</label>
          <input type="text" name="fname" class="w-full border rounded-lg p-2" required>
        </div>
        <div>
          <label class="block mb-1 font-medium">Last Name</label>
          <input type="text" name="lname" class="w-full border rounded-lg p-2" required>
        </div>
        <div>
          <label class="block mb-1 font-medium">Email ID</label>
          <input type="email" name="email" class="w-full border rounded-lg p-2" required>
        </div>
        <div>
          <label class="block mb-1 font-medium">Phone Number</label>
          <input type="tel" name="phone" class="w-full border rounded-lg p-2" required>
        </div>
        <div>
          <label class="block mb-1 font-medium">Business Name</label>
          <input type="text" name="buisnessname" class="w-full border rounded-lg p-2" required>
        </div>
    	<div>
     <label class="block mb-1 font-medium">Category</label>
         <select name="contact_category" id="contact_category" class="form-control">
    <option value="">Select Category</option>
    {/* @foreach($contact_category as $id => $title)
        <option value="{{ $id }}">{{ $title }}</option>
    @endforeach */}
</select>
    	</div>
        <div>
          <label class="block mb-1 font-medium">GST Number</label>
          <input type="text" name="gst" class="w-full border rounded-lg p-2">
        </div>
        <div>
          <label class="block mb-1 font-medium">PAN Number</label>
          <input type="text" name="pan" class="w-full border rounded-lg p-2">
          <input type="hidden" name="file_type" value="lead">
          <input type="hidden" name="contact_type" value="11">
          
        </div>
        <div>
          <label class="block mb-1 font-medium">Address</label>
          <textarea name="address" rows="3" class="w-full border rounded-lg p-2" required></textarea>
        </div>
      </div>

      {/* <!-- General File Upload --> */}
      <div>
        <label class="block mb-1 font-medium">Other Files (optional)</label>
        <input type="file" name="other_file" multiple class="w-full p-2 border rounded-lg">
      </div>

      {/* <!-- KYC Documents --> */}
      <div class="mt-8">
        <h2 class="text-xl font-semibold mb-4 text-indigo-600">KYC Documents</h2>
        <div class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">3 Page GST Document</label>
            <input type="file" name="gst_file" accept=".pdf,.jpg,.jpeg,.png" class="w-full p-2 border rounded-lg" required>
          </div>
          <div>
            <label class="block mb-1 font-medium">PAN Document</label>
            <input type="file" name="pan_file" accept=".pdf,.jpg,.jpeg,.png" class="w-full p-2 border rounded-lg" required>
          </div>
          <div>
            <label class="block mb-1 font-medium">Udyam Registration</label>
            <input type="file" name="udyam_file" accept=".pdf,.jpg,.jpeg,.png" class="w-full p-2 border rounded-lg">
          </div>
          <div>
            <label class="block mb-1 font-medium">Cancelled Cheque / Bank Details</label>
            <input type="file" name="bank_cheque" accept=".pdf,.jpg,.jpeg,.png" class="w-full p-2 border rounded-lg" required>
          </div>
        </div>
      </div>

      {/* <!-- Submit Button --> */}
      <div class="text-center mt-8">
        <button type="submit" class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
          Submit Application
        </button>
      </div>
    </form>
  </div>
</div>
    
    </>
  )
}

export default Sample
