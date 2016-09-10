package kawigi.problem;
import kawigi.language.*;
import kawigi.cmd.*;
import java.util.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

/**
 *	This is used to create the ClassDecl so that we can generate code for
 *	problems in standalone.
 *	
 *	The parsing process is far from perfect here, and I obviously just haven't
 *	put enough time into writing it and testing it.  If someone wants to put
 *	some effort into it and make it work in more (or all) cases, be my guest,
 *	and let me know if you want your contributions to go to the final product.
 **/
public class ProblemParser extends JDialog implements ActionListener, ClassDeclGenerator
{
	/**
	 *	Text box that the problem statement is pasted into.
	 **/
	private JTextPane textArea;
	/**
	 *	Button you push to start the parsing.
	 **/
	private JButton parseButton;
	/**
	 *	Combo box to select the language you want the code generated in.
	 **/
	private JComboBox languageBox;
	/**
	 *	Resulting ClassDecl.
	 **/
	private ClassDecl retval;
	
	/**
	 *	Constructs a problem parser ready to prompt the user for a problem
	 *	statement.
	 **/
	public ProblemParser()
	{
		super((JFrame)null, "Paste the Problem Statement", true);
		JPanel panel = new JPanel(new BorderLayout());
		textArea = new JTextPane();
		panel.add(new JScrollPane(textArea));
		parseButton = new JButton("Parse!");
		parseButton.addActionListener(this);
		languageBox = new JComboBox(new Object[]{"C++", "Java", "C#", "VB"});
		JPanel bottomPanel = new JPanel();
		bottomPanel.add(new JLabel("Language"));
		bottomPanel.add(languageBox);
		bottomPanel.add(parseButton);
		panel.add(bottomPanel, BorderLayout.SOUTH);
		setContentPane(panel);
		setSize(500, 300);
	}
	
	/**
	 *	Process events from the Problem Parser dialog.
	 *	
	 *	This is actually where the parsing happens.
	 **/
	public void actionPerformed(ActionEvent e)
	{
		EditorLanguage lang = EditorLanguage.Java;
		if (languageBox.getSelectedItem().equals("C++"))
			lang = EditorLanguage.CPP;
		else if (languageBox.getSelectedItem().equals("Java"))
			lang = EditorLanguage.Java;
		else if (languageBox.getSelectedItem().equals("C#"))
			lang = EditorLanguage.CSharp;
		else
			lang = EditorLanguage.VB;
		StringTokenizer tok = new StringTokenizer(textArea.getText(), "\r\n");
		//ArrayList testCases = new ArrayList();
		String className = null, methodName = null;
		String[] paramNames = null;
		EditorDataType returnType = null;
		EditorDataType[] paramTypes = null;
		while (tok.hasMoreTokens())
		{
			String token = tok.nextToken();
			if (token.equals("Class:"))
				className = tok.nextToken();
			else if (token.equals("Method:"))
				methodName = tok.nextToken();
			else if (token.equals("Parameters:"))
			{
				String params = tok.nextToken();
				String[] typenames = params.split(", ");
				paramTypes = new EditorDataType[typenames.length];
				for (int i=0; i<typenames.length; i++)
					paramTypes[i] = lang.getType(typenames[i]);
			}
			else if (token.equals("Returns:"))
			{
				String retType = tok.nextToken();
				returnType = lang.getType(retType);
			}
			else if (token.equals("Method signature:"))
			{
				String sig = tok.nextToken();
				sig = sig.substring(sig.indexOf('(')+1, sig.lastIndexOf(')'));
				String[] params = sig.split(", ");
				paramNames = new String[params.length];
				for (int i=0; i<params.length; i++)
					paramNames[i] = params[i].substring(params[i].lastIndexOf(' ')+1);
			}
			else if (token.matches("[0-9]+\\)"))
			{
				if (retval == null)
				{
					// Let's set up what we have:
					retval = new ClassDecl(className, new MethodDecl(methodName, returnType, paramTypes, paramNames));
				}
				tok.nextToken();
				String[] params = new String[paramNames.length];
				for (int i=0; i<params.length; i++)
				{
					params[i] = tok.nextToken();
					while (params[i].trim().startsWith("{") && !params[i].trim().endsWith("}"))
						params[i] += tok.nextToken();
				}
				String result = tok.nextToken().substring("Returns: ".length());
				retval.addTest(new Test(result, params));
			}
		}
		ProblemContext.setLanguage(lang);
		setVisible(false);
	}
	
	/**
	 *	Shows the dialog, and when the dialog is closed, returns the ClassDecl
	 *	that resulted from it.
	 **/
	public ClassDecl getClassDecl(Object ... parameters)
	{
		setVisible(true);
		return retval;
	}
}
