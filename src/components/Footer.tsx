export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-semibold">श्री श्याम स्टील & ग्लास एल्युमिनियम</h2>
          <p className="mt-2">पता :- गणपति मंदिर चौराहा, नीमच रोड, जीरन (म.प्र.)</p>
          <p className="mt-2">धीरज बैरागी</p>
          <p className="mt-1"><a href="tel:+91 8871017326" className="text-blue-400 hover:underline">8871017326</a></p>
          <hr className="my-4 border-gray-600" />
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Shree Shyam Steel. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  